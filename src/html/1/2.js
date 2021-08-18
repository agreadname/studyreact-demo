/**
 * 场景是这样的
 * 由函数ABCD都要根据接口Z调用之后的结果才能调用
 * 但是ABCD接口调用Z的结果，如果Z的结果过期之类的，就和后台获取新的结果，后面的请求都要挂起来等待结果
 * ABCD是用户主动点击触发的，时间不定
 */
function a1(params) {
    new Promise(o => {
        setTimeout(() => {
            console.log("a1")
            o()
        }, 1000);
    })
}

function a2(params) {
    console.log('====================================');
    console.log("a2");
    console.log('====================================');
}
a1()
setTimeout(() => {
    a2()
}, 1200);

function automaticBarrage(){
    let text='谢谢你们长得这么好看还给我点关注'
    document.getElementById('').value=text
    let btn=  document.getElementById('')
    const event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });
      btn.dispatchEvent(event);      
    
}


setInterval(()=>{
    automaticBarrage()
},9*60*1000)