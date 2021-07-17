import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './listComponents.css'
import { Checkbox } from 'antd';
class TodoItem extends PureComponent {
    static props={
        title:PropTypes.string,
        toStatus:PropTypes.bool,
        isDeleted:PropTypes.bool,
    }
    static defaultProps={
        title:"123",
        toStatus:0,
        isDeleted:0
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
   onDelete=(e)=>{
       console.log('====================================');
       console.log(e);
       this.props.onDelete(e)
       console.log('====================================');
   }
   onCollect=(e)=>{
    console.log('====================================');
    console.log(e);
    console.log('====================================');
}
    render() {
        const {toStatus} =this.state
        return (
            <div className="wrapper">
                <div className="left">{this.props.title}</div>
                <div className="right"> <Checkbox  checked={toStatus} onChange={this.onChange}></Checkbox></div>
                <div className="right"> <button onClick={this.onDelete.bind(this,this.props.title)}>🗑</button></div>
                <div className="right"> <button onClick={()=>{this.onCollect(this.props.title)}}>⭐</button></div>
            </div>
        );
    }
}

export default TodoItem;