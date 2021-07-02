//         多个异步函数内调
function a1() {
    return new Promise(o => {
        console.log("a1")
        o('a1_1')
    })
}
async function a2() {
    const _a2 = await a1()
    console.log(_a2);
    console.log('a2_1');
}
function noAsynca3() {  
    console.log('noAsync start')
    a2()
    console.log("noAsync end")
}
async function Asynca3() {
    console.log('start')
    await a2()
    console.log("end")
}
//    noAsynca3()
Asynca3()