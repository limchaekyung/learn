// ', ", `
/* let html = '<div class="box_title">제목 영역</div>'

let desc = "It's 3 o'clock"

let name = 'Mike'
let result = `My name is ${name}.`  // My name is Mike.
let add = `2 더하기 3은 ${2 + 3}입니다.`  // 2 더하기 3은 5입니다. */

// 여러 줄
/* let desc1 = `오늘은 맑고 화창한
날씨가 계속 되겠습니다.
내일은 비소식이 있습니다.`

let desc2 = '오늘은 맑고 화창한\n날씨가 계속 되겠습니다.'

let desc3 = '오늘은 맑고 화창한  // error
날씨가 계속 되겠습니다.' */

// length : 문자열 길이
/* let desc = '안녕하세요'
desc.length // 6 */

// 특정 위치에 접근
/* let desc = '안녕하세요'
desc[2]    // 하

desc[4] = '용'
console.log(desc)   // 안녕하세요 */

// toUpperCase() / toLowerCase()
/* let desc = "Hi guys. Nice to meet you"

desc.toUpperCase()
"Hi GUYS. NICE TO MEET YOU"

desc.toLowerCase()
"hi guys. nice to meet you" */

// str.indexOf(text)
/* let desc = "Hi guys. Nice to meet you"
desc.indexOf('to')  // 14
desc.indexOf('man')  // -1

if (desc.indexOf('Hi') > -1) {
    console.log('Hi가 포함된 문장입니다.')
} */

// str.slice(n, m)
// n: 시작점
// m: 없으면 문자열 끝까지, 양수면 그 숫자까지(포함하지 않음), 음수면 끝에서부터 셈
/* let desc = "abcdefg"

desc.slice(2)       // "cdefg"
desc.slice(0, 5)    // "abcde"
desc.slice(2, -2)   // "cde" */

// str.substring(n, m)
// n과 m 사이 문자열 반환
// n과 m을 바꿔도 동작함
// 음수는 0으로 인식
/* let desc = "abcdefg"

desc.substring(2, 5)    // "cde"
desc.substring(5, 2)    // "cde" */

// str.substr(n, m)
// n부터 시작, m개를 가져옴
/* let desc = "abcdefg"

desc.substr(2, 4)   //"cdef"
desc.substr(-4, 2)   //"de" */

// str.trim() : 앞 뒤 공백 제거
/* let desc = " coding        "
desc.trim() // "coding" */

// str.repeat(n) : n번 반복
/* let hello = "hello!"
hello.repeat(3) // "hello!hello!hello!" */

// 문자열 비교
/* 1 < 3   // true
"a" < "c"   // true
"a".codePointAt(0)  // 97
String.fromCodePoint(97)    // "a" */

/* let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열"
]
let newList = []
for (let i = 0; i < list.length; i++) {
    newList.push(
        list[i].slice(4)
    )
}

console.log(newList)
// {"들어가며", "JS의 역사", "자료형", "함수", "배열"} */

// 금칙어 : 콜라
/* function hasCola(str) {
    if (str.indexOf('콜라') > -1) {
        console.log('금칙어가 있습니다.')
    } else {
        console.log('통과')
    }
}
hasCola('와 사이다가 짱이야!')  // -1
hasCola('무슨소리, 콜라가 최고')
hasCola('콜라') // 0 */

// 금칙어 : 콜라
// includes
// 문자가 있으면 true
// 없으면 false 반환
/* function hasCola(str) {
    if (str.includes('콜라')) {
        console.log('금칙어가 있습니다.')
    } else {
        console.log('통과')
    }
}

hasCola('와 사이다가 짱이야!')
hasCola('무슨소리, 콜라가 최고')
hasCola('콜라')  */