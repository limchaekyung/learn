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

/* const pr = new Promise((resolve, reject) => {
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
}) */

/* const f1 = (callback) => {
    setTimeout(function () {
        console.log("1번 주문 완료")
        callback()
    }, 1000)
}
const f2 = (callback) => {
    setTimeout(function () {
        console.log("2번 주문 완료")
        callback()
    }, 3000)
}
const f3 = (callback) => {
    setTimeout(function () {
        console.log("3번 주문 완료")
        callback()
    }, 2000)
}
console.log('시작')
f1(function () {
    f2(function () {
        f3(function () {
            console.log('끝')
        })
    })
}) */

const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('1번 주문 완료')
            // rej(new Error('xxx'))
        }, 1000)
    })
}
const f2 = (message) => {
    console.log(message)
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('2번 주문 완료')
        }, 3000)
    })
}
const f3 = (message) => {
    console.log(message)
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('3번 주문 완료')
        }, 2000)
    })
}

// Promise.race
console.time('x')
Promise.race([f1(), f2(), f3()]).then((res) => {
    console.log(res)
    console.timeEnd('x')
})

// Promise.all
// console.time('x')
// Promise.all([f1(), f2(), f3()]).then((res) => {
//     console.log(res)
//     console.timeEnd('x')
// })

// 프로미스 체이닝(promise chaning)
// console.log('시작')
// f1()
//     .then((res) => f2(res))
//     .then((res) => f3(res))
//     .then((res) => console.log(res))
//     .catch(console.log)
//     .finally(() => {
//         console.log('끝')
//     })

