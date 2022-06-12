// arr.sort()
/*
배열 재정렬
주의! 배열 자체가 변경됨
인수로 정렬 로직을 담은 함수를 받음
*/

/* // let arr = [1, 5, 4, 2, 3]
// let arr = ['a', 'c', 'd', 'e', 'b']
let arr = [27, 8, 5, 13]

// 8, 27, 5, 13
// 5, 8, 27, 13
// 5, 8, 13, 27

arr.sort((a, b) => {
    return a - b
})
console.log(arr)

// [1, 2, 3, 4, 5]
// ['a', 'b', 'c', 'd', 'e']
// [13, 27, 5, 8] -> [5, 8, 13, 27] */

// Loadash _.sortBy(arr)⭐

// arr.reduct()
// 인수로 함수를 받음
// (누적 계산값, 현재값) => { return 계산값 }

// 배열의 모든 수 합치기
/* let arr = [1, 2, 3, 4, 5]

// for, for of, forEach
// let result = 0

// arr.forEach((num) => {
//     result += num
// })

const result = arr.reduceRight((prev, cur) => {
    return prev + cur
}, 100)

console.log(result) // 115 */

let userList = [
    { name: "Mike", age: 30 },
    { name: "Tom", age: 10 },
    { name: "Jane", age: 27 },
    { name: "Sue", age: 26 },
    { name: "Harry", age: 42 },
    { name: "Steve", age: 60 },
]

// let result = userList.reduce((prev, cur) => {
//     if (cur.age > 19) {
//         prev.push(cur.name)
//     }
//     return prev

// }, [])

let result = userList.reduce((prev, cur) => {
    return prev += cur.age
}, 0)

console.log(result)
// ['Mike', 'Jane', 'Sue', 'Harry', 'Steve']
//  196
