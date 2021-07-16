import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Addtodo extends Component {
    static props={
        title:PropTypes.string
    }
    static defaultProps={
        title:'ADD'
    }
    render() {
        return (
            <button>{this.props.title}</button>
        );
    }
}

export default Addtodo;