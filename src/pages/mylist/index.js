'use strict';
import React from 'react';
function Mylist(props) {
    return props.list.map((e, i) => {
        return (
            <div key={e.name + i}>{(i + 1) + '·' + e.name}:${e.price}</div>
        )
    })
}
class UseAxios extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [
            ]
        }
    }
    componentDidMount() {
        this.$axios.get('http://myjson.dit.upm.es/api/bins/1c57').then(res => {

            if ((res.status * 1) === 200) {
                this.setState({ list: res.data.list })
            }
        })
    }

    render() {
        if (this.state.list.length > 0) {
            return (<Mylist list={this.state.list} />)
        } else {
            return (<div>数据为空</div>)
        }


    }
}

export {UseAxios}