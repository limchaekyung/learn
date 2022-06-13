// 어휘적 환경(Lexical Environment)

/* // Lexical 환경
// one: 초기화X,                                                                                                      사용불가
// addOne: function, 사용가능
let one
// Lexical 환경
// one: 초기화O,                                                                                                      사용불가
// addOne: function, 사용가능

one = 1
// Lexical 환경
// one: 1,                                                                                                      사용불가
// addOne: function

function addOne(num) {
    console.log(one + num)
}

addOne(5)   // 6
// 전역 Lexical 환경
// one: 1,                                                                                                      사용불가
// addOne: function

// ↑참조

// 내부 Lexical 환경
// num: 5 */

// 전역 Lexical 환경
/* // makeAdder: function
// add3: 초기화X
function makeAdder(x) {
    return function (y) {
        return x + y
    }
}

const add3 = makeAdder(3)
// 전역 Lexical 환경
// makeAdder: function
// add3: function

// makeAdder Lexical 환경
// x: 3

console.log(add3(2))
// 전역 Lexical 환경
// makeAdder: function
// add3: function

// ↑참조

// makeAdder Lexical 환경
// x: 3

// ↑참조

// 익명함수 Lexical 환경
// y: 2 */

/* function makeAdder(x) {
    return function (y) {
        // y를 가지고 있고 상위 함수인 makeAdder의 x에 접근 가능
        return x + y
    }
}

const add3 = makeAdder(3)
console.log(add3(2))    // 5
// add3 함수가 생성된 이후에도 상위함수인 makeAdder의 x에 접근 가능

const add10 = makeAdder(10)
console.log(add10(5))   // 15
console.log(add3(1))    // 4 */

// Closure
/* 
함수와 렉시컬 환경의 조합
함수가 생성될 당시의 외부 변수를 기억
생성 이후에도 계속 접근 가능
*/

/* function makeCounter() {
    let num = 0 // 은닉화

    return function () {
        return num++
    }
}

let counter = makeCounter()

console.log(counter())  // 0
console.log(counter())  // 1
console.log(counter())  // 2 */