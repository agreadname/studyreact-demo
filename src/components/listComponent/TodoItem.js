import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './listComponents.css'
import { Checkbox } from 'antd';
class TodoItem extends PureComponent {
    static props={
        title:PropTypes.string,
        toStatus:PropTypes.number
    }
    static defaultProps={
        title:"123",
        toStatus:0
    }
   constructor(props){
       super(props)
       this.state={...this.props}
   }
   componentWillMount() {
       
   }
   onChange=(e)=>{
       console.log(e)
       this.setState({toStatus:e.target.checked})
   }
    render() {
        const {toStatus} =this.state
        return (
            <div className="wrapper">
                <div className="left">{this.props.title}</div>
                <div className="right"> <Checkbox  checked={toStatus} onChange={this.onChange}></Checkbox></div>
            </div>
        );
    }
}

export default TodoItem;