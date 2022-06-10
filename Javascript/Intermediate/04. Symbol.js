// property key : 문자형
/* const obj = {
    1: '1입니다.',
    false: '거짓'
}
Object.keys(obj)    // ["1", "false"]
obj['1']    // "1 입니다."
obj['false']    // "거짓" */

// Symbol
/* const a = Symbol()    // new를 붙이지 않는다.
// 유일한 식별자
const b = Symbol()

console.log(a)  //Symbol()
console.log(b)  //Symbol()

a === b   // false
a == b    // false */

// Symbol: 유일성 보장
/* const id = Symbol('id')
const id2 = Symbol('id')

console.log(id) // Symbol(id)
console.log(id2)    // Symbol(id)

id === id2  // false
id == id2   // false */

// property key : 심볼형
/* const id = Symbol('id')
const user = {
    name: 'Mike',
    age: 30,
    [id]: 'myid'
}

console.log(user)   // {name: "Mike", age: 30, Symbol(id): 'myid'}
console.log(user[id])   //"myid"

Object.keys(user)   // ["name", "age"]
Object.values(user) // ["Mike", 30]
Object.entries(user)    // [Array(2), Array(2)]

for (let a in user) { } */

// Symbol
/* const user = {
    name: 'Mike',
    age: 30
}
const id = Symbol('id')
user[id] = 'myid'

// user.name = 'myname'    // (X)
// user.a_key_no_one_used = 'hahaha'   // (X) */

// Symbol.for() : 전역 심볼
/*
하나의 심볼만 보장받을 수 있음
없으면 만들고, 있으면 가져오기 때문
Symbol 함수는 매번 다른 Symbol 값을 생성하지만,
Symbol.for 메서드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
*/

/* const id1 = Symbol.for('id')
const id2 = Symbol.for('id')

id1 === id2 // true

Symbol.keyFor(id1)  // "id" */

// description
/* const id = Symbol('id 입니다.')
id.description  //'id 입니다.' */

// 숨겨진 Symbol key 보는 법
/* const id = Symbol('id')

const user = {
    name: 'Mike',
    age: 30,
    [id]: 'myid'
}

Object.getOwnPropertySymbols(user)  // [Symbol(id)]
Reflect.ownKeys(user)   // ["name", "age", Symbol(id)] */

/* // 다른 개발자가 만들어 놓은 객체
const user = {
    name: 'Mike',
    age: 30
}

// 내가 작업
// user.showName = function(){}
const showName = Symbol('show name')
user[showName] = function () {
    console.log(this.name)
}

user[showName]()

// 사용자가 접속하면 보는 매세지
for (let key in user) {
    console.log(`His ${key} is ${user[key]}`)
    // His name is Mike.
    // His age is 30.
} */