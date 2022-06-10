// toString()
// 10진수 -> 2진수/16진수
/* let num = 10
num.toString()  // 10
num.toString(2) // 1010

let num2 = 255
num2.toString(16)   // ff */

// Math
/* Math.PI // 3.141592653589793 */

/* let num1 = 5.1
let num2 = 5.7 */

// Math.ceil() : 올림
/* Math.ceil(num1) // 6
Math.ceil(num2) // 6 */

// Math.floor() : 내림
/* Math.floor(num1)    // 5
Math.floor(num2)    // 5 */

// Math.round() : 반올림
/* Math.round(num1)    // 5
Math.round(num2)    // 6 */

// 소수점 자릿수
// 요구사항 : 소수점 둘째자리까지 표현(셋째 자리에서 반올림)
/* let userRate = 30.1234 */

/* Math.round(userRate * 100) / 100  // 30.12 */

// 소수점 자릿수 : toString() <주의: 문자열이므로 숫자로 변경해야 함>
/* userRate.toString(2)    // "30.12"
userRate.toString(0)    // "30"
userRate.toString(6)    // "30.123400"

Number(userRate.toString(2))    // 30.12 */

// isNaN()
/* let x = Number('x') // NaN

x == NaN    // false
x === NaN   // false
NaN == NaN  // false

isNaN(x)    // true
isNaN(3)    // false */

// parseInt()
/* let margin = '10px'
parseInt(margin)    // 10
Number(margin)  // NaN

let redColor = 'f3'
parseInt(redColor)  // NaN
parseInt(redColor, 16)  // 243

parseInt('11', 2)   // 3 */

// parseFloat()
/* let padding = '18.5%'
parseInt(padding)   // 18
parseFloat(padding) // 18.5 */

// Math.random() : 0 ~ 1 사이 무작위 숫자 생성
/* console.log(Math.random())  // 0.026895448212698403
console.log(Math.random())  // 0.37418008907546163
console.log(Math.random())  // 0.3116747247424614
console.log(Math.random())  // 0.2807749919074405

// 1~100 사이 임의의 숫자를 뽑고 싶다면
console.log(Math.floor(Math.random() * 100) + 1)    // 21 */

// Math.max() / Math.min()
/* Math.max(1, 4, -1, 5, 10, 9, 5.54)  // 10
Math.min(1, 4, -1, 5, 10, 9, 5.54)  // -1 */

// Math.abs() : 절대값
/* Math.abs(-1)    // 1 */

// Math.pow(n, m) : 제곱
/* Math.pow(2, 10) // 1024 */

// Math.sqrt() : 제곱근
/* Math.sqrt(16)   // 4 */