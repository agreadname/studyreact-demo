import React from 'react';
import './homeCss.css';
import  {Game}  from '../game'
import { UseAxios } from '../mylist'
import { Headerui } from '../../components/header'
import { Footerui } from '../../components/footer'
import { TimerView } from '../mobxDemo'
import { Testasnyc } from '../testasnyc/wrapper'
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
const { Header, Footer, Content } = Layout;


class Homewrapper extends React.Component {
    render() {
        return (
            <Layout >
                <Router>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <Headerui />
                    </Header>
                    <Content className="wrapperStyle">
                        <Route exact path="/" component={Game} />
                        <Route path="/new" component={UseAxios} />
                        <Route path="/TimerView" component={TimerView} />
                        <Route path="/Testasnyc" component={Testasnyc} />
                        
                        
                    </Content>
                </Router>

                <Footer style={{ background: '#666', color: '#fff', textAlign: 'center' }}>
                    <Footerui time={new Date().toLocaleString()} title={'来自中国'} />
                </Footer>
            </Layout>
        )
    }
}
export { Homewrapper }