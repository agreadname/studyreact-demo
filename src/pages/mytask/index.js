import React, { Component } from 'react';
import TodoItem from '../../components/listComponent/TodoItem';
import './index.css'
class Mytask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [{
                title:'事项1',
                toStatus:0
            }],
            initDate:new Date().toLocaleString()
        }
    }

    handleRenderList(arr) {
        const list= arr.map((e,i) =>
            <TodoItem title={e.title} key={i+e.title} toStatus={e.toStatus}></TodoItem>
        )
        return list
    }
    render() {
        const { arr,initDate } = this.state
        return (
            <div>
                <p>MY TODO</p>
                <div className="content">
                    {this.handleRenderList(arr)}
                </div>
                <p>TODO初始化时间：{initDate}</p>
            </div>
        );
    }
}
module.exports = Mytask
