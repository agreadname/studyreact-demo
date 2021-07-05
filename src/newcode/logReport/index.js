/**
 * homeInit //首页调用匹配 检测激活和次留 客观调用
 * handleLogReport //用户操作行为上报 主观调用
 */
import { AppState } from 'react-native';
import { BehaviorList } from '../../enums/logReportKeys';
import http from "../network";
import { JUDGE_ADAPTDEVICE, REPORT_ADAPTDEVICE } from '../../config/Urls';
import AppConfig from '../../config/AppConfig';
// import { adaptDate, reportDate } from './mockDate';

class LogReportEntry {
    constructor() {
        console.log("report  ", AppConfig);
        this.localReportData = null;
        this.deviceObj = this.handleDevice();
        this.forceUpdate = false;// 需要刷新匹配结果
        this.expires = 3;// 这个原本是管APP切换的，后来发现RN实例之间的切换也会触发
        this.backGoundTime = null;
        AppState.addEventListener('change', (nextAppState) => { // 初始化不会调用
            this._handleAppStateChange(nextAppState);
        });
    }

    handleDevice() {
        const { oaid, idfa, imei } = AppConfig;
        const badidfa = '00000000-0000-0000-0000-000000000000';
        if (!oaid && !imei && (idfa === badidfa || !idfa)) return false; // 不用上报
        return { oaid, idfa, imei };
    }

    /**
     * 经过在安卓手机下 测试，锁屏，切到后台，任务选择界面都会触发为background
     * 苹果 会增加 inactive状态
     * @param {STRING} nextAppState
     *
     */
    _handleAppStateChange = async (nextAppState) => {
        // 切換到後臺過需要上报前需要重新匹配 增加20s 判断
        if (nextAppState === 'active' && !this.forceUpdate && this.backGoundTime) {
            const currentTime = (new Date()).getTime();
            this.forceUpdate = currentTime > this.backGoundTime + this.expires * 1000;
            this.backGoundTime = null;// 归零
        }
        // 切出后台
        if (nextAppState !== 'active') {
            this.backGoundTime = (new Date()).getTime();
        }
    }

    /**
     *
     * @returns 首页 检查激活和次留
     */
    homeInit = async () => {
        console.log("首页激活留次检测", this.deviceObj);
        if (!this.deviceObj) return;
        await this._requstmatchRes(this.deviceObj);
        if (this.localReportData.matchRes === 1 && this.localReportData.activeRes === 1) {
            this.handleFirstActive();// 需要上报激活
        }
        if (this.localReportData.matchRes === 1 && this.localReportData.secondStayRes === 1) {
            this.handleActiveSecond();// 需要上报次留
        }
    }

    // 激活 BehaviorList.REPORT_ACTIVE
    handleFirstActive = () => {
        this._submitLogReport(BehaviorList.REPORT_ACTIVE);
    }

    // 次留 BehaviorList.REPORT_ACTIVE_SECOND
    handleActiveSecond() {
        this._submitLogReport(BehaviorList.REPORT_ACTIVE_SECOND);
    }

    /**
     * 提交给后端的key值
     * 外部可用函数 app\lib\logReport\BaseData.js
     * @param {STRING} actionType
     */
    handleLogReport = async (actionType, cb) => {
        // 强制刷新匹配结果
        if (this.forceUpdate || !this.localReportData) {
            await this._requstmatchRes(this.deviceObj);
        }
        if (this.localReportData.mobBaseRes === 1) {
            this._submitLogReport(actionType, cb);
        }
    }

    // 匹配请求
    _requstmatchRes = async (deviceObj) => {
        const response = await http.get(JUDGE_ADAPTDEVICE, { ...deviceObj });
        // const response = await adaptDate(deviceObj);
        if (response.mobBaseRes && response.mobBaseRes.code === 100) {
            this.localReportData = { ...response.mobBaseRes.result };
            console.log("report 匹配", response);
            this.forceUpdate = false;
        }
    }

    // 上报请求
    _submitLogReport = async (actionType, callbackfn = null) => {
        const response = await http.get(REPORT_ADAPTDEVICE, { actionType, ...this.deviceObj });
        // const response = await reportDate({ actionType,...deviceObj});
        // console.log("report 上报", response, actionType);
        if (callbackfn && typeof callbackfn === 'function') callbackfn(response);
    }
}
export default new LogReportEntry();
