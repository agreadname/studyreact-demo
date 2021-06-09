import React from 'react';
import ReactDOM from 'react-dom';
import {TimerView,Timer} from './pages/mobxDemo'
import {Game} from './pages/game'
import {UseAxios} from './pages/mylist'
import './request'
import './index.css';
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
start()
