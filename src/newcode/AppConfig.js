// Simple React Native specific changes
import {
    Platform, DeviceEventEmitter, NetInfo, NativeModules,
} from 'react-native';

import DeviceInfo from 'react-native-device-info';
import {
    CHECK_LOGIN_STATE_RESULT,
    LOGIN_STATE_CHANGE_TO_LOGIN,
    LOGIN_STATE_CHANGE_TO_LOGOUT,
    LOGIN_STATE_NO_CHANGE,
} from '../enums/Listeners';

const isAndroid = Platform.OS === 'android';
const isiOS = Platform.OS === 'ios';


const NETWORK_TYPE = {
    NONE: `none`,
    WIFI: `wifi`,
    CELLULAR: `cellular`,
    UNKNOWN: `unknown`,
};
const NETWORK_EFFECTIVE_TYPE = {
    '2G': `2g`,
    '3G': `3g`,
    '4G': `4g`,
    UNKNOWN: `unknown`,
};

const network = {
    networkType: NETWORK_TYPE.CELLULAR, // 因为getConnectionInfo是异步函数，所以预设有网，以免无法加载
    networkEffectiveType: NETWORK_EFFECTIVE_TYPE['4G'], // 因为getConnectionInfo是异步函数，所以预设有网，以免无法加载
};
NetInfo.getConnectionInfo()
    .then((connectionInfo) => {
        network.networkType = connectionInfo.type;
        network.networkEffectiveType = connectionInfo.effectiveType;
    });
NetInfo.addEventListener(
    'connectionChange',
    (connectionInfo) => {
        network.networkType = connectionInfo.type;
        network.networkEffectiveType = connectionInfo.effectiveType;
    },
);

/**
 * 获取渠道名称
 * @returns {string}
 */
const getPlatform = () => Platform.OS;

/**
 * 渠道标识
 * @type {number}
 */
const sourceChannel = NativeModules.YMShopSDK.sourceChannel || (Platform.OS === 'android' ? 3 : 2); // 在这里统一获取渠道信息

/**
 * 是否已登录
 * @returns {boolean}
 */
const isUserLogin = () => !!global.globalUserInfo && !!global.globalUserInfo.token && !!global.globalUserInfo.userCode;

const initUserInfo = () => ({
    token: undefined,
    userCode: undefined,
    account: undefined,
    channelId: undefined,
    headImg: undefined,
    nickName: undefined,
    mobile: undefined,
    userId: undefined,
});

global.globalUserInfo = initUserInfo();

/**
 * 检查用户登录状态，会根据实际情况会发出 从未登录变成登录，从已登录变成退出登录，状态无变化  三种消息，按需监听
 */
// TODO: 防抖，考察多个RN的数据公用情况，
const checkLoginChange = () => {
    const cleanUserInfo = () => {
        global.globalUserInfo = initUserInfo();
    };

    /**
     * 状态从未登录变为登录成功。发送登录成功消息
     * token
     userCode
     account
     channelId
     headImg
     nickName
     mobile
     * @param info
     */
    const changeToLogin = (info) => {
        global.globalUserInfo = { ...info };
        const params = {
            result: LOGIN_STATE_CHANGE_TO_LOGIN,
            userInfo: global.globalUserInfo,
        };
        DeviceEventEmitter.emit(CHECK_LOGIN_STATE_RESULT, params);
    };

    /**
     * 状态从登录变为未登录，发送退出登录消息
     */
    const changeToLogout = () => {
        cleanUserInfo();
        const params = {
            result: LOGIN_STATE_CHANGE_TO_LOGOUT,
            userInfo: global.globalUserInfo,
        };
        DeviceEventEmitter.emit(CHECK_LOGIN_STATE_RESULT, params);
    };

    /**
     * 状态未变，是取消登录/取消退出登录 抑或是 跳转了与登录业务毫无关系的页面再返回的时候，发送状态无变化消息
     */
    const noChange = () => {
        const params = {
            result: LOGIN_STATE_NO_CHANGE,
            userInfo: global.globalUserInfo,
        };
        DeviceEventEmitter.emit(CHECK_LOGIN_STATE_RESULT, params);
    };

    try {
        NativeModules.YMShopSDK.getUserInfo('identifier', (nInfo) => {
            const isLogin = isUserLogin();
            let info = nInfo;

            if (isAndroid) {
                info = JSON.parse(info);
            }

            if (!!info.token && !!info.userCode && info.token !== '-1' && info.userCode !== '-1') {
                // 本设备最新状态为已登录
                if (!isLogin) {
                    // 原本未登录，变成登录
                    changeToLogin(info);
                } else if (info.token === global.globalUserInfo.token && info.userCode === global.globalUserInfo.userCode) {
                    // 原本已登录，并且token userCode都一样，判定为用户未变，啥也不做
                    noChange();
                } else {
                    // 原本已登录，但是token或userCode已经变了，判定了另外的用户/或者同样的用户但是刷新了token
                    changeToLogin(info);
                }
            } else if (isLogin) { // 视为本设备最新状态为未登录
                // 本来登录，变成未登录
                changeToLogout();
            } else {
                // 本来就是未登录，啥也不做
                cleanUserInfo();
                noChange();
            }
        });
    } catch (e) {
        // 出错，作为用户未登录处理
        noChange();
    }
};

const compareVersion = (version, check) => {
    try {
        if (version === check) {
            // 版本等于check
            return 0;
        }

        const versionList = version.split('.');
        const checkList = check.split('.');
        if ((parseInt(versionList[0], 10) < parseInt(checkList[0], 10))
            || (parseInt(versionList[0], 10) === parseInt(checkList[0], 10) && parseInt(versionList[1], 10) < parseInt(checkList[1], 10))
            || (parseInt(versionList[0], 10) === parseInt(checkList[0], 10) && parseInt(versionList[1], 10) === parseInt(checkList[1], 10) && parseInt(versionList[2], 10) < parseInt(checkList[2], 10))) {
            // 版本低于check
            return -1;
        }
        // 版本高于check
        return 1;
    } catch (e) {
        return -1; // 直接返回-1，主要是兼容2.0.2以及以前iOS没有react-native-device-info库的问题，后续应该不会跑到这里除非入参有误
    }
};

/**
 * 应用版本号
 */
const version = DeviceInfo.getVersion();

/**
 * 设备id
 */
const { did } = NativeModules.YMShopSDK;

/**
 * 设备mac地址
 */
const { mac } = NativeModules.YMShopSDK;

/**
 * 设备imei
 */
const { imei } = NativeModules.YMShopSDK;

/**
 * 设备oaid
 */
const { oaid } = NativeModules.YMShopSDK;

/**
 * 设备idfa
 */
const { idfa } = NativeModules.YMShopSDK;
export default {
    // font scaling override - RN default is on
    allowTextFontScaling: false,
    includeFontPadding: false,
    textAlignVertical: 'center',
    isAndroid,
    isiOS,
    NETWORK_TYPE,
    NETWORK_EFFECTIVE_TYPE,
    network,
    getPlatform,
    sourceChannel,
    checkLoginChange,
    isUserLogin,
    compareVersion,
    version,
    did,
    mac,
    imei,
    oaid,
    idfa,
};
