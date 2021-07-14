import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { Homewrapper } from './pages/home'
import { ConfigProvider } from 'antd';
import { serve } from './request'
import './index.css';
moment.locale('zh-cn');
React.Component.prototype.$axios = serve


class Myapp extends React.Component {


    render(
    ) {
        return <ConfigProvider locale={zhCN}>
            <Homewrapper/>
         
        </ConfigProvider>
    }
}


ReactDOM.render(<Myapp></Myapp>, document.getElementById("root"));



