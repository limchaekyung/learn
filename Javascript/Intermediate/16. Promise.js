// Promise
/* const pr = new Promise((resolve, reject) => {
    // resolve: 성공, reject: 실패
    // code
}) */

/* 
new Promise
state: pending(대기)
result: undefined

resolve(value): 성공
state: fulfilled(이행됨)
result: value

reject(error)
state: rejected(거부됨)
result: error
*/

/* const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK')
    }, 3000)
})

state: pending(대기)
result: undefined

3s

state: fulfilled(이행됨)
result: 'OK'
*/

/* const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('error...'))
    }, 3000)
})

state: pending(대기)
result: undefined

3s

state: rejected(거부됨)
result: error
*/

/* const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK')
    }, 3000)
})

// pr.then(
//     function (result) { },   // 이행되었을 때 실행
//     function (err) { }      // 거부되었을 때 실행
// )

pr.then(
    function (result) { }   // 이행
).catch(
    function (err) { }  // 거부
).finally(
    function () {
        console.log('--- 주문 끝 ---')
    }
) */

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('OK')
        reject(new Error('err...'))
    }, 1000)
})
console.log('시작')
pr.then((reject) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log('끝')
})