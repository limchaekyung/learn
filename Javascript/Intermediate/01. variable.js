// 변수 let, const, var
// var
// 한번 선언된 변수를 다시 선언할 수 있다.
/* var name = 'Mike'
console.log(name)   // Mike

var name = 'Jane'
console.log(name)   // Jane */

// 선언하기 전에 사용할 수 있다.
/* var name;   //호이스팅
console.log(name)   // undefined
name = 'Mike'   // 할당 */

/* console.log(name)   // ReferenceError, Temporal Dead Zone
let name = 'Mike'   // 함수 선언 및 할당
console.log(name)   // 사용 가능 */

// 호이스팅 : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동
/* let age = 30
function showAge() {
    console.log(age)
    // let age = 20    // 호이스팅은 스코프 단위로 일어나므로 오류 발생
}
showAge() */

// 변수의 생성과정
// var
// 1. 선언 및 초기화(undefiend 할당) 단계
// 2. 할당 단계

// let
// 1. 선언 단계
// 2. 초기화 단계
// 3. 할당 단계

// const
// 1. 선언 + 초기화 + 할당

// 스코프
// var : 함수 스코프(function scoped)
// let, const : 블록 스코프(block scoped)
//              함수, if문, for문, while문, try/catch문        
/* function add() {
    // block level scope
}
if () {
    // block level scope
}
for (let i = 0; i < 10; i++) {
    // block level scope
} */

/* const age = 30
if (age > 19) {
    var txt = '성인'
}
console.log(txt)    //'성인' */

/* function add(num1, num2){
    var result = num1 + num2
}

add(2,3)
console.log(result) // ReferenceError */