import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Addtodo extends Component {
    static props={
        title:PropTypes.string,
        onAdd:PropTypes.func,
    }
    static defaultProps={
        title:'ADD'
    }
    render() {
        return (
            <button onClick={(e)=>{this.props.onAdd(e)}}>{this.props.title}</button>
        );
    }
}

export default Addtodo;