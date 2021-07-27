import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './listComponents.css'
import { Checkbox } from 'antd';
class TodoItem extends PureComponent {
    static props={
        title:PropTypes.string,
        index:PropTypes.number,
        toStatus:PropTypes.bool,
        isDeleted:PropTypes.bool,
        onDelete:PropTypes.func,
    }
    static defaultProps={
        title:"123",
        toStatus:0,
        isDeleted:0,
        index:-1
    }
   constructor(props){
       super(props)
       this.state={...this.props}
   }
   componentWillMount() {
       
   }
   onChange=(e)=>{
       if(e.target.checked)this.setState({toStatus:e.target.checked})
       else e.preventDefault();
       
   }
   componentWillUnmount=()=>{
       console.log("被删除");
   }
   onDelete=(val,e)=>{ typeof this.props.onDelete ==='function'&& this.props.onDelete(val);}
   onCollect=(e)=>{ console.log(e); }
    render() {
        const {toStatus} =this.state
        return (
            <div className="wrapper">
                <div className="left">{this.props.title}</div>
                <div className="right"> <Checkbox  checked={toStatus} onChange={this.onChange}></Checkbox></div>
                <div className="right"> <button onClick={this.onDelete.bind(this,this.props)}>🗑</button></div>
                <div className="right"> <button onClick={()=>{this.onCollect(this.props.title)}}>⭐</button></div>
            </div>
        );
    }
}

export default TodoItem;