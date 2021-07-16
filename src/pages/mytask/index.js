import React, { Component } from 'react';
import TodoItem from '../../components/listComponent/TodoItem';
import Addtodo from '../../components/addTodo';
import './index.css'
class Mytask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [
                {
                    title: '事项1',
                    toStatus: false,
                    isDeleted: false,
                    id:'1232adf148'
                },
                {
                    title: '事项2',
                    toStatus: false,
                    isDeleted: true,
                    id:'123asdf21ad4s8'
                },
            ],
            initDate: new Date().toLocaleString()
        }
    }
    onDelete()
    handleRenderList(arr) {
        const list = arr.map((e, i) => {
            if (!e.isDeleted) return <TodoItem ref={e.id} title={e.title} key={i + e.title} toStatus={e.toStatus} isDeleted={e.isDeleted} onDelete={()=>{this.onDelete(e)}}></TodoItem>
        }

        )
        return list
    }
    handleAddRender(){
        return <Addtodo/>
    }
    /**
     * 
     * @returns 组件与字符串的拼接
     */
    render() {
        const { arr, initDate } = this.state
        return (
            <div>
                <p>MY TODO</p>
                <div className="content">
                    {arr.length>0?this.handleRenderList(arr):<> 暂无数据请先添加 <Addtodo/></>}
                </div>
                <p>TODO初始化时间：{initDate}</p>
            </div>
        );
    }
}
module.exports = Mytask
