// 함수 선언문 vs 함수 표현식
/* function sayHello() {   // 함수 선언문: 어디서든 호출 가능✔
    console.log('Hello')
}

let sayHello = function () {    // 함수 표현식: 코드에 도달하면 생성
    console.log('Hello')
}

sayHello() */

// 함수 표현식
showError()

let showError = function () { //error
    console.log('error')
}

// 함수 선언문
showError()

function showError() {
    console.log('error')
}

// 화살표 함수(arrow function)
let showError = () => {
    console.log('error')
}
