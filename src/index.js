import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 定义组件 jsx
class MyfirstReactComponet extends React.Component {
    render() {
        console.log("this", this);
        return (
            <div>
                <div className="myfirstreact-css">我第一个react组件</div>
                <div>{this.props.testprops}</div>

                {/* <button onClick={this.addNum}>点击我加1（{this.i}）</button> */}
            </div>
        )
    }
}
// createElement API
class MyjsxReactComponent extends React.Component {
    render() {
        return React.createElement('div', { className: 'myfirstreact-css' }, '我是第一个用createElement的组件')
    }
}
//class写法
class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = { myclassName: 'square square1' }
    }
    render() {
        return (
            <button className={this.state.myclassName} onClick={() => { this.props.onClick()}}>
                {this.props.val}
            </button>
        );
    }
}
//函数写法


class Board extends React.Component {
    // 定义class内部通用参数
    constructor(props){
        super(props)
        this.state={status:'1',squares:Array(9).fill(null)}
    }
    // 个人定制的函数
    handleClick(i){
        const squares = this.state.squares.slice();//相当于复制
        squares[i] = 'X';
        this.setState({squares:squares})
    }

    renderSquare(i) {
        //在react实例里面注册的一个组件，
        return <Square val={this.state.squares[i]} onClick={()=>{
            this.handleClick(i)
        }}/>;
    }
    //最终渲染的参数
    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="status">{this.state.status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
                <div>
                    <MyfirstReactComponet testprops="父传值" />
                    <MyjsxReactComponent />
                </div>

            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
