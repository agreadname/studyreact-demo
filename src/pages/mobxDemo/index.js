
import { makeAutoObservable, observable, action, autorun, computed, runInAction } from "mobx"
import { observer } from "mobx-react"
import React from "react"
// import { serve } from '../../request'
const myObservable = observable(0)//定义要被检测的数字
const getmyComputedValue = computed(() => myObservable.get() > 0)
// const getmyComputedValue = computed(() => {return myObservable.get() > 0 })
//当观测到的数据发生变化的时候，如果变化的值处在autorun中，那么autorun就会自动执行。
/**
 * set,get==>类同与vue的defineOjecttype这个数据驱动，获取数据要用setter和getter
 * autorun auto run 没写在这个里面
 */
autorun(() => {
    console.log(myObservable.get())
    console.log(getmyComputedValue.get())
})
myObservable.set(1)//触发
myObservable.set("1")//触发
myObservable.set("1")//不触发
myObservable.set(-2)//触发

/**
 * 封装的写计时器方法
 */
class Timer {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    increase() {
        this.secondsPassed += 1
        return this.secondsPassed
    }

    reset() {
        this.secondsPassed = 0
    }
}
const timer = new Timer()
// Build a "user interface" that uses the observable state.
const TimerView = observer(({ }) => (
    <React.Fragment>
        <div>倒计时案例（mobx使用）</div>
        <button onClick={() => { timer.reset(); }}>Seconds passed: {timer.secondsPassed}</button>
    </React.Fragment>
))

/**
 * action observable
 */
class MyStore {
    @observable myNumber = 0;
    @action handleAdd = () => {
        this.myNumber++
    }
}
const newMystore = new MyStore()
newMystore.handleAdd()
console.log(newMystore.myNumber);
/**
 * runInAction
 */
function getDate(logName) {
    /*
        return serve.get('http://myjson.dit.upm.es/api/bins/1c57').then(res => {
    
            if ((res.status * 1) === 200) {
                console.log(logName)
                return res.data
                
            }
        })
    */

    return new Promise(o => {
        setTimeout(() => { console.log(logName, "暂停中"); o() }, 300)
    }).then(() => { console.log(logName); return { status: '暂停结束' } })
}
class MyRunAction {
    @observable list = ''

    //增加异步的使用
    @action load = async () => {
        console.log("action", 0)
        const data = await getDate('action 1')
        console.log("action", 2)
        runInAction(() => {
            this.list = data
            console.log("action", 3, data)
        })
        console.log("action", 4)
    }
    @action unAsync = () => {
        console.log("action unAsync", 0)
        const data = getDate('action unAsync 1')
        console.log("action unAsync", 2)
        runInAction(() => {
            this.list = data
            console.log("action unAsync", 3, data)
        })
        console.log("action unAsync", 4)
    }


}
let myrun = new MyRunAction()
myrun.load()
myrun.unAsync()

export { TimerView }
