import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
const { SubMenu } = Menu;

class Headerui extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 'first'
        }
    }
    handldeClickNav = (e) => {
        this.setState({ current: e.key })//只要setState触发，就会使render调用这个函数,所以render里面不要写太多代码

    }


    render() {

        const { current } = this.state
        return (
            <Menu onClick={this.handldeClickNav} theme='dark' selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="first" >
                    <Link to="/">   首页</Link>
                </Menu.Item>

                <Menu.Item key="new" >
                    <Link to="/new">   比克国十一</Link>

                </Menu.Item>
                <Menu.Item key="second" >
                    <Link to="/Testasnyc">   省一好兄弟</Link>
                </Menu.Item>
                <SubMenu key="SubMenu" title="TODO">
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">
                            <Link to="/Mytask">Mytask</Link>
                        </Menu.Item>
                        <Menu.Item key="setting:2">十七YYDS</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
            </Menu >
        )
    }
}
export { Headerui }

