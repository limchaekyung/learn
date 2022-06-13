// 인수 전달
// arguments, 나머지 매개변수
/* function showName(name) {
    // name: 개수 제한 없음
    console.log(name)
}
showName('Mike')    // 'Mike'
showName('Mike', 'Tom')    // 'Mike', 'Tom'
showName()  // undefined */

// arguments
/*
함수로 넘어온 모든 인수에 접근
함수 내에서 이용 가능한 지역 변수
length / index
Array 형태의 객체
배열의 내장 메서드 없음(forEach, map)
*/
/* function showName(name) {
    console.log(arguments.length)
    console.log(arguments[0])
    console.log(arguments[1])
}
showName('Mike', 'Tom')
// 2
// 'Mike'
// 'Tom' */

// 나머지 매개변수(Rest parameters)
/* function showName(...names) {
    console.log(names)
}
showName()  // []
showName('Mike')    // ['Mike']
showName('Mike', 'Tom')    // ['Mike', 'Tom'] */

// 나머지 매개변수
// 전달 받은 모든 수를 더해야 함
/* // function add(...numbers) {
//     let result = 0
//     numbers.forEach((num) => (result += num))
//     console.log(result)
// }

function add(...numbers) {
    let result = numbers.reduce((prev, cur) => prev + cur)
    console.log(result)
}

add(1, 2, 3)    // 6
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)  // 55 */

// user 객체를 만들어 주는 생성자 함수
/* function User(name, age, ...skills) {
    // 나머지 매개 변수는 마지막에 작성
    this.name = name
    this.age = age
    this.skills = skills
}

const user1 = new User('Mike', 30, 'html', 'css')
const user2 = new User('Tom', 20, 'JS', 'React')
const user3 = new User('Jane', 30, 'English')

console.log(user1)
console.log(user2)
console.log(user3) */

// 전개 구문(Spread syntax) : 배열
/* let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

// let result = [...arr1, ...arr2]
// // arr1: 1, 2, 3 / arr2: 4, 5, 6

// console.log(result) // [1, 2, 3, 4, 5, 6]

let result = [0, ...arr1, ...arr2, 7, 8, 9]

console.log(result) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr.push() / arr.splice() / arr.concat() - X */


// 전개 구문(Spread syntax) : 객체
/* let user = { name: 'Mike' }
let mike = { ...user, age: 30 }

console.log(mike)   // {name: 'Mike', age: 30} */

// 전개 구문(Spread syntax) : 복제
/* let arr = [1, 2, 3]
let arr2 = [...arr] // [1, 2, 3]

let user = { name: 'Mike', age: 30 }
let user2 = { ...user }

user2.name = "Tom"

console.log(user.name)  // 'Mike'
console.log(user2.name)  // 'Tom' */

// 전개 구문
// arr1을 [4, 5, 6, 1, 2, 3]으로
/* let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

// arr2.reverse().forEach(num => {
//     arr1.unshift(num)
// })

arr1 = [...arr2, ...arr1]

console.log(arr1)   // [4, 5, 6, 1, 2, 3] */

/* let user = { name: 'Mike' }
let info = { age: 30 }
let fe = ['js', 'React']
let lang = ['Korean', 'English']

// user = Object.assign({}, user, info, { skills: [] })

// fe.forEach(item => {
//     user.skills.push(item)
// })
// lang.forEach(item => {
//     user.skills.push(item)
// })

user = {
    ...user,
    ...info,
    skills: [...fe, ...lang]
}

console.log(user)   */