/*
String() - 문자형으로 변환
Number() - 숫자형으로 변환
Boolean() - 불린형으로 변환
*/

/*
const mathScore = prompt("수학 몇점?")
const engScore = prompt("영어 몇점?")
const result = (mathScore + engScore) / 2

const mathScore = 90
const engScore = 80
const result = (mathScore + engScore) / 2

console.log(result)

// prompt 입력 -> 문자형
// "90" + "80" = "9080"
// "9080" / 2 = 4050(자동형변환)
*/

/*
// 명시적 형변환
// String()
console.log(
    String(3),
    String(true),
    String(false),
    String(null),
    String(undefined)
) */

/* // Number()
console.log(
    Number(true),   // 1
    Number(false)   //0
) */

// Boolean()
/* false   
    -숫자 0
    -빈 문자열 ''
    -null
    -undefined
    -NaN */
/* console.log(    // true
    Boolean(1),
    Boolean(123),
    Boolean("javascript")
)
console.log(    // false
    Boolean(0),
    Boolean(""),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN)
) */

/* 
String() -> 문자형으로 변환
Number() -> 숫자형으로 변환
            Number("문자") // NaN
Boolean() -> 불린형으로 변환            
             0, '', null, undefined, NaN -> false

// 주의사항
Number(null)    // 0
Number(undefined)   // NaN

Number(0)   // false
Number('0') // true

Number('')  // false
Number(' ') // true
*/