// 논리 연산자
// ||(or) &&(and) !(not)

// or
// 여러개 중 하나라도 true면 true
// 즉, 모든 값이 false일 때만 false를 반환

// and
// 모든 값이 true면 true
// 즉, 하나라도 false면 false를 반환

// not
// true면 false
// false면 true

// 평가
/*
or는 첫번째 true를 발견하는 즉시 평가를 멈춤
and는 첫번째 false를 발견하는 즉시 평가를 멈춤
*/

// or
//이름이 TOM이거나 성인이면 통과
/* const name = "Mike"
const age = 30

if (name === 'Tom' || age > 19) {
    console.log('통과')
} */

// and
// 이름이 Mike이고, 성인이면 통과
/* const name = "Tom"
const age = 30

if (name === 'Mike' && age > 19) {
    console.log('통과')
} else {
    console.log('돌아가')
} */

// not
// 나이를 입력받아 성인 아면 돌아가
/* const age = prompt('나이가?')
const isAdult = age > 19

if (!isAdult) {
    console.log('돌아가')
} */

// 우선순위
// 남자이고, 이름이 Mike이거나 성인이면 통과
/* const gender = 'M'
const name = 'Jane'
const isAdult = true

// if (gender === 'M' && name === 'Mike' || isAdult) {
if (gender === 'M' && (name === 'Mike' || isAdult)) {
    console.log('통과')
} else {
    console.log('돌아가')
} */