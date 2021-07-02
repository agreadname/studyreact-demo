import React from 'react';
import ReactDOM from 'react-dom';
import {TimerView,Timer} from './pages/mobxDemo'
import {Game} from './pages/game'
import {UseAxios} from './pages/mylist'
import {serve} from './request'
import './index.css';
React.Component.prototype.$axios=serve
const myTimer = new Timer()

class Myapp extends React.Component {
   
    
    render(
    ) {
        return <div>
            <div>游戏案例</div>
            <Game />
            <hr/>
            <div>axios使用案例</div>
            <UseAxios></UseAxios>
            <hr/>
            <div>倒计时案例（mobx使用）</div>
            <TimerView timer={myTimer} />
        </div>
    }
}


ReactDOM.render(<Myapp></Myapp>, document.getElementById("root"));


function start(){
    let cancelTimer=setInterval(() => {
        const currentVal= myTimer.increase()
        
         if(currentVal>5){
             clearInterval(cancelTimer)
         }
     }, 1000)
}
<<<<<<< HEAD
start()
=======

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
>>>>>>> 5dea0d9e620dc21b3ccdab2b84c7235af85f2d36
