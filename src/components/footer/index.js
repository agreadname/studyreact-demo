import React, { Component } from 'react';
import PropTypes from 'prop-types';//写组件必备
import './footer.css'
class Footerui extends Component {
    static propTypes = {
        time: PropTypes.string,
        title: PropTypes.string,

    }
    static defaultProps = {
        title: 'come from china'
    }
    constructor(props) {
        super(props)
        this.state = { label: "@版本时间：", title: this.props.title }
    }
    handleClick (e) {
        console.log(e,"handleClick")
        //window.open('http://www.cyberpolice.cn/wfjb/')
    }
    otherFnc(){
        console.log('====================================');
        console.log("otherFnc");
        console.log('====================================');
    }
    render() {

        return (
            <div >
                <p> {this.state.label} {this.props.time}</p>
                <p onClick={(e)=>{this.handleClick(e);this.otherFnc()}} className="link">{this.state.title}</p>
            </div>
        )
    }
}


export { Footerui }