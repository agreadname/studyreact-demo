
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
        this.serverRequest=null
    }
    

    componentDidMount() {
        this.serverRequest = this.$axios.get('http://myjson.dit.upm.es/api/bins/qua').then(res => {

            if ((res.status * 1) === 200) {
                this.setState({ list: res.data.list })
            }
        })
        console.log(this.serverRequest)
    }
    /**
     * React 组件的数据可以通过 componentDidMount 方法中的 Ajax 来获取，当从服务端获取数据时可以将数据存储在 state 中，再用 this.setState 方法重新渲染 UI。当使用异步加载数据时，在组件卸载前使用 componentWillUnmount 来取消未完成的请求。
     */
    componentWillUnmount(){
        this.setState = ()=>false;
        
    }
    render() {
        if (this.state.list.length > 0) {
            return (<Mylist list={this.state.list} ></Mylist>)
        } else {
            return (<div>   <div>axios使用案例</div> 数据为空</div>)
        }


    }
}

export { UseAxios }