/**
 * @Author: guopeijia.
 * @Data: 2018/8/14 0014
 * @Version: 1.0
 * @description: 主入口
 */

import React, { Component } from 'react';
import {
    DeviceEventEmitter,
    StyleSheet,
    View,
} from 'react-native';
import 'RCTLog';
import { Provider } from 'mobx-react';

import './lib/storage/StorageEntry';
import './config'; // 引入配置，
import './version'; // 引入版本控制
import store from './stores/index';
import MainRouter from './router/MainRouter';
import LoadingLayout from './components/layouts/LoadingLayout';
import { RN_VIEW_WILL_APPEAR, TOKEN_REFRESH, TRIGGER_ACTION } from './enums/Listeners';
import ModalLayout from './components/layouts/ModalLayout';
// import ConsoleSuspension from './modules/console/ConsoleSuspension';
// import TitleBar from './components/bars/TitleBar';
import MyMessageDialog from './components/alert/MyMessageDialog';
import { NativeInterface } from './lib/nativeInterface/NativeInterface';
import Toast from './components/toast';
import routerMapper from './stores/widget/RouterMapper';
import LogicEntry from './utils/LogicEntry';
import NewStatisticsEntry from './lib/statistics/NewStatisticsEntry';
import BaseImage from './components/media/BaseImage';
import AppConfig from './config/AppConfig';
import './lib/logReport';
global.t = new Date().getTime();
global.st = () => {
    global.t = new Date().getTime();
    console.warn('st');
};
global.tt = (msg) => {
    const _t = new Date().getTime() - global.t;
    Toast.show(`${_t}...${msg}`);
    console.warn(`${_t}...${msg}`);
};
class App extends Component {
    constructor(props) {
        super(props);
        this.rnViewWillAppearListener = null;
        this.rnRefreshTokenListener = null;
        this.rnActionListener = null;
        if (!NativeInterface.getIdentifier()) {
            NativeInterface.setIdentifier(props.identifier);
        }
        this.mainRouter = undefined; // 主路由组件的实例
    }

    componentWillMount() {
        LogicEntry.init();
        const { app, identifier } = this.props;
        if (app) {
            NewStatisticsEntry.setRandom();
        }
        this.rnViewWillAppearListener = DeviceEventEmitter.addListener(RN_VIEW_WILL_APPEAR, (obj) => {
            if (obj.identifier === identifier) { // 只有当当前显示的标识是本页面，才执行，
                appConf.checkLoginChange();
            }
            NativeInterface.setIdentifier(obj.identifier); // 设置本实例当前活跃的页面，注意一个实例内，活跃的页面不一定是本页面
            NewStatisticsEntry.setRandom();

            
        });

        this.rnRefreshTokenListener = DeviceEventEmitter.addListener(TOKEN_REFRESH, (params) => {
            // TODO: feat(token过期处理): 暂时处理app.js的tokenrefresh回调可能可能导致loading一直存在的问题
            if (params.errorCode !== -1) {
                globalUserInfo.token = params.token;
            }
        });

        if (NativeInterface.getPureRN()) {
            // 如果是纯RN页面的话，提供监听页面跳转能力，可以接收来自原生的消息，利用参数（actionId）来直接跳转新的页面
            this.rnActionListener = DeviceEventEmitter.addListener(TRIGGER_ACTION, (params) => {
                let _pa = params;
                if (typeof _pa === 'string') {
                    _pa = JSON.parse(_pa);
                }
                if (_pa.identifier === identifier && _pa.info) { // 只有当当前显示的标识是本页面，才执行，
                    const { info } = _pa;
                    if (this.mainRouter) {
                        const currentPage = this.mainRouter.getCurrentPage(); // 向主路由获取当前最新的页面
                        if (currentPage && currentPage.props) {
                            const { props } = currentPage;
                            // 拿到页面的属性，确认是否通过routerMapper来跳转且和即将要跳的是同一个且同参数
                            if (props && props.__routeType === routerMapper.routeType.ACTION && props.__routeSource === JSON.stringify(info)) {
                                // 当前最顶部的页面和即将要跳的页面是同一个页面且同样的参数，则不作任何动作
                                return;
                            }
                        }
                    }
                    routerMapper.jump(info);
                }
            });
        }
    }
    componentWillUnmount() {
        if (this.rnViewWillAppearListener) {
            this.rnViewWillAppearListener.remove();
            this.rnViewWillAppearListener = null;
        }
        if (this.rnRefreshTokenListener) {
            this.rnRefreshTokenListener.remove();
            this.rnRefreshTokenListener = null;
        }
        if (this.rnActionListener) {
            this.rnActionListener.remove();
            this.rnActionListener = null;
        }
    }

    onCoverRef = (ref) => {
        this.appCover = ref;
        console.log('test ==> 关闭闪屏');
        NativeInterface.setSplashScreenVisible(false);
    }

    onRouterInited = () => {
        if (this.appCover) {
            console.log('test ==> 主数据onlayout');
            this.appCover.setCover(false);
        }
    }

    render() {
        return (
            <View
                style={appStyles.container}
            >
                <View
                    style={appStyles.container}
                >
                    <Provider
                        {...store}
                    >
                        <MainRouter
                            ref={(ref) => {
                                this.mainRouter = ref;
                            }}
                            onRouterInited={this.onRouterInited}
                            {...this.props}
                        />
                    </Provider>
                    <ModalLayout />
                    {/* <ConsoleSuspension /> */}
                    <LoadingLayout />
                    <MyMessageDialog
                        ref={(ref) => {
                            if (ref) {
                                global.ymAlert = {
                                    show: ref.show,
                                    hide: ref.hide,
                                };
                            } else {
                                global.ymAlert = {
                                    show: () => { },
                                    hide: () => { },
                                };
                            }
                        }}
                    />
                </View>
                <AppCover
                    ref={this.onCoverRef}
                />
            </View>
        );
    }
}

class AppCover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: AppConfig.sourceChannel === require('./enums/SourceChannel').ANDROID_FRIDGE_X,
        };
    }

    setCover = (s) => {
        const { show } = this.state;
        if (s === show) return;
        this.setState({
            show: s,
        });
    }

    render() {
        const { show } = this.state;
        if (!show) return null;

        return (
            <BaseImage
                style={appStyles.cover}
                resizeMode={'cover'}
                source={require(`./sources/img_home_skeleton_screen.png`)}
            />
        );
    }
}

const appStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cover: {
        ...StyleSheet.absoluteFillObject,
        width: deviceWidth,
    },
});

module.exports = App;


// import Launch from './Components/Launch';
// import Register from './Components/Register';
// import Login from './Components/Login';
// import Login2 from './Components/Login2';
// import Login3 from './Components/Login3';
// import Home from './Components/Home';
// import DrawerContent from './Components/drawer/DrawerContent';
// import TabView from './Components/TabView';
// import TabIcon from './Components/TabIcon';
// import EchoView from './Components/EchoView';
// import MessageBar from './Components/MessageBar';
// import ErrorModal from './Components/modal/ErrorModal';
// import DemoLightbox from './Components/lightbox/DemoLightbox';
// import MenuIcon from './Images/menu_burger.png';
// import CustomNavBarView from './Components/CustomNavBarView';
// import CustomNavBar from './Components/CustomNavBar';
// import CustomNavBar2 from './Components/CustomNavBar2';

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'transparent',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   tabBarStyle: {
//     backgroundColor: '#eee',
//   },
//   tabBarSelectedItemStyle: {
//     backgroundColor: '#ddd',
//   },
// });
//
// const reducerCreate = (params) => {
//   const defaultReducer = new Reducer(params);
//   return (state, action) => {
//     console.log('reducer: ACTION:', action);
//     return defaultReducer(state, action);
//   };
// };
//
// const stateHandler = (prevState, newState, action) => {
//   console.log('onStateChange: ACTION:', action);
// };
//
// const getSceneStyle = () => ({
//   backgroundColor: '#F5FCFF',
//   shadowOpacity: 1,
//   shadowRadius: 3,
// });

// on Android, the URI prefix typically contains a host in addition to scheme
// const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

// const Example = () => (
//     <Router createReducer={reducerCreate} onStateChange={stateHandler} getSceneStyle={getSceneStyle} uriPrefix={prefix}>
//         <Overlay key="overlay">
//             <Modal key="modal" hideNavBar transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}>
//                 <Lightbox key="lightbox">
//                     <Stack hideNavBar key="root" titleStyle={{ alignSelf: 'center' }}>
//                         <Scene key="echo" back clone component={EchoView} getTitle={({ navigation }) => navigation.state.key} />
//                         <Scene key="launch" component={Launch} title="Launch" initial />
//
//                         <Stack key="customNavBar" hideTabBar titleStyle={{ alignSelf: 'center' }}>
//                             <Scene key="customNavBar1" title="CustomNavBar 1" navBar={CustomNavBar} component={CustomNavBarView} back />
//                             <Scene key="customNavBar2" title="CustomNavBar 2" navBar={CustomNavBar} component={CustomNavBarView} back />
//                             <Scene key="customNavBar3" title="Another CustomNavBar" navBar={CustomNavBar2} component={CustomNavBarView} back />
//                             <Scene key="hiddenNavBar" title="hiddenNavBar" component={CustomNavBarView} hideNavBar={true} back />
//                         </Stack>
//
//                         <Stack back backTitle="Back" key="register" duration={0} navTransparent>
//                             <Scene key="_register" component={Register} title="Register" />
//                             <Scene key="register2" component={Register} title="Register2" />
//                             <Scene key="home" component={Home} title="Replace" type={ActionConst.REPLACE} />
//                         </Stack>
//
//                         <Drawer hideNavBar key="drawer" contentComponent={DrawerContent} drawerImage={MenuIcon} drawerWidth={300}>
//                             {/*
//                 Wrapper Scene needed to fix a bug where the tabs would
//                 reload as a modal ontop of itself
//               */}
//                             <Scene hideNavBar panHandlers={null}>
//                                 <Tabs
//                                     key="tabbar"
//                                     backToInitial
//                                     swipeEnabled
//                                     showLabel={false}
//                                     tabBarStyle={Styles.tabBarStyle}
//                                     activeBackgroundColor="white"
//                                     inactiveBackgroundColor="rgba(255, 0, 0, 0.5)"
//                                 >
//                                     <Stack
//                                         key="tab_1"
//                                         title="Tab #1"
//                                         tabBarLabel="TAB #1"
//                                         inactiveBackgroundColor="#FFF"
//                                         activeBackgroundColor="#DDD"
//                                         icon={TabIcon}
//                                         navigationBarStyle={{ backgroundColor: 'green' }}
//                                         titleStyle={{ color: 'white', alignSelf: 'center' }}
//                                     >
//                                         <Scene key="tab_1_1" component={TabView} title="Tab #1_1" onRight={() => myAlert('Right button')} rightTitle="Right" />
//
//                                         <Scene key="tab_1_2" component={TabView} title="Tab #1_2" back titleStyle={{ color: 'black', alignSelf: 'center' }} />
//                                     </Stack>
//
//                                     <Stack key="tab_2" title="Tab #2" icon={TabIcon} initial>
//                                         <Scene key="tab_2_1" component={TabView} title="Tab #2_1" renderRightButton={() => <Text>Right</Text>} />
//                                         <Scene key="tab_2_2" component={TabView} title="Tab #2_2" back onBack={() => myAlert('onBack button!')} hideDrawerButton backTitle="Back!" panHandlers={null} />
//                                     </Stack>
//
//                                     <Stack key="tab_3" icon={TabIcon} title="Tab #3">
//                                         <Scene key="tab_3_1" component={TabView} rightTitle="Right3" onRight={() => {}} />
//                                     </Stack>
//                                     <Scene key="tab_4_1" component={TabView} title="Tab #4" hideNavBar icon={TabIcon} />
//                                     <Stack key="tab_5" icon={TabIcon} title="Tab #5">
//                                         <Scene key="tab_5_1" component={TabView} />
//                                     </Stack>
//                                 </Tabs>
//                             </Scene>
//                         </Drawer>
//                     </Stack>
//
//                     <Scene key="demo_lightbox" component={DemoLightbox} />
//                 </Lightbox>
//                 <Scene key="error" component={ErrorModal} />
//                 <Stack key="login" path="login/:data" titleStyle={{ alignSelf: 'center' }}>
//                     <Scene key="loginModal" component={Login} title="Login" onExit={() => console.log('onExit')} leftTitle="Cancel" onLeft={Actions.pop} />
//                     <Scene key="loginModal2" component={Login2} title="Login2" backTitle="Back" panHandlers={null} duration={1} />
//                     <Scene key="loginModal3" hideNavBar component={Login3} title="Login3" panHandlers={null} duration={1} />
//                 </Stack>
//             </Modal>
//
//             <Scene component={MessageBar} />
//         </Overlay>
//     </Router>
// );

// const MainRouter = () => {
//     // Actions.create()
//     return (
//         <Router>
//             <Stack key="root">
//                 <Scene key="HomeScreen" component={HomeScreen} title="ScreenOne"/>
//                 <Scene key="ScreenOne" component={ScreenOne} title="ScreenOne"/>
//                 <Scene key="ScreenTwo" component={ScreenTwo} title="ScreenTwo"/>
//             </Stack>
//         </Router>
//     )
// };
//
// export default MainRouter;
