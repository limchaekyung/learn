// 배열(array) : 순서가 있는 리스트

/* let students = ['철수', '영희', ... '영수']
// index : 0부터 시작

console.log(students[0])    // 철수
console.log(students[1])    // 영희
console.log(students[29])    // 영수

students[0] = '민정'
console.log(students)   //['민정', '영희', ...] */

// 배열의 특징
// 문자뿐만 아니라 숫자, 객체, 함수 등도 포함할 수 있음
/* let arr = [
    '민수',
    3,
    false,
    {
        name: 'Mike',
        age: 30
    },
    function () {
        console.log('TEXT')
    }
] */

// length: 배열의 길이
// students.length // 30

// push() : 배열 끝에 추가
/* let days = ['월', '화', '수']
days.push('목')
console.log(days)   //['월','화','수','목'] */

// pop() : 배열 끝 요소 제거
/* let days = ['월', '화', '수']
days.pop()
console.log(days)   //['월','화'] */

// shift, unshift : 배열 앞에 제거/추가
// 추가
/* let days = ['월', '화', '수']
// days.unshift('일')
days.unshift('금', '토', '일')
console.log(days)   // ['일','월','화','수']
// ['금', '토', '일', '월', '화', '수'] */

// 제거
/* days.shift()
console.log(days)   // ['월','화','수'] */

// 반복문 : for
/* let days = ['월', '화', '수']

for (let index = 0; index < days.length; index++) {
    console.log(days[index])    // 0~2까지 반복
} */

// 반복문 : for ... of
/* let days = ['월', '화', '수']

for (let day of days) {
    console.log(day)
} */