// setTimeout: 일정 시간이 지난 후 함수를 실행
/* function fn() {
    console.log(3)
}
setTimeout(fn, 3000)
// 3000 = 3s */

/* setTimeout(function () {
    console.log(3)
}, 3000) */

/* function showName(name) {
    console.log(name)
}
const tId = setTimeout(showName, 3000, 'Mike')
// showName: 함수, 3000, 시간, 'Mike': 인수

clearTimeout(tId) */

// setInterval: 일정 시간 간격으로 함수를 반복
/* function showName(name) {
    console.log(name)
}
const tId = setInterval(showName, 3000, 'Mike')
clearInterval(tId) */

// delay = 0?
/* setTimeout(function () {
    console.log(2)
}, 0)
console.log(1)
// 1, 2 */

/* let num = 0
function showTime() {
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`)
    if (num > 5) {
        clearTimeout(tId)
    }
}
const tId = setInterval(showTime, 1000) */
