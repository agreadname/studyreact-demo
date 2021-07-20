import React, { Component } from "react";
import TodoItem from "../../components/listComponent/TodoItem";
import Addtodo from "../../components/addTodo";
import Addform from "../../components/Addform/Addform";
import "./index.css";
class Mytask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        {
          title: "事项1",
          toStatus: false,
          isDeleted: false,
          id: "1232adf148",
        },
        {
          title: "事项23",
          toStatus: false,
          isDeleted: false,
          id: "123asdf21ad4s8",
        },
      ],
      initDate: new Date().toLocaleString(),
      showAdd:false
    };
  }
  onDelete(val) {
    const { arr } = this.state;

    arr[val.index].isDeleted = true;
    this.setState({ arr }, () => { console.log("更新完毕"); });
    //this.replaceState相当于this.state={} setstate相当于 this.state={...this.state,...obj}
  }
  handleRenderList(arr) {
    const list = arr.map((e, i) => {
      if (!e.isDeleted)
        return (
          <TodoItem
            ref={e.id}
            title={e.title}
            key={i + e.title}
            index={i}
            toStatus={e.toStatus}
            isDeleted={e.isDeleted}
            onDelete={(a) => {
              this.onDelete(a);
            }}
          ></TodoItem>
        );
    });
    return list;
  }
  handleAdd() {
      const {showAdd}=this.state
      this.setState({showAdd:!showAdd},()=>{
      })
  }
 
  /**
   *
   * @returns 组件与字符串的拼接
   */
  render() {
    const { arr, initDate,showAdd } = this.state;
    return (
      <div>
        <p>MY TODO <Addtodo onAdd={(e)=>{this.handleAdd(e)}}  /></p>
        <p><Addform showAdd={showAdd} defaultVal="默认值"/></p>
        <div className="content">
          {arr.length > 0 ? (
            this.handleRenderList(arr)
          ) : (
            <>
              
              暂无数据请先添加 <Addtodo onAdd={(e)=>{this.handleAdd(e)}}/>
            </>
          )}
        </div>
        <p>TODO初始化时间：{initDate}</p>
      </div>
    );
  }
}
module.exports = Mytask;
