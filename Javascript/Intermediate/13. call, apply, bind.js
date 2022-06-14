// call, apply, bind
// 함수 호출 방식과 관계없이 this를 지정할 수 있음

// call
// call 메서드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있음
/* const mike = {
    name: 'Mike'
}
const tom = {
    name: 'Tom'
}
function showThisName() {
    console.log(this.name)
}
// showThisName()  // window.name = ""
// showThisName.call(mike)
// showThisName.call(tom)

function update(birthYear, occupation) {
    this.birthYear = birthYear
    this.occupation = occupation    // 직업
}

update.call(mike, 1999, 'singer')
console.log(mike)

update.call(tom, 2002, 'teacher')
console.log(tom) */

// apply
// apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같음
// call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만,
// apply는 매개변수를 배열로 받음

/* const mike = {
    name: 'Mike'
}
const tom = {
    name: 'Tom'
}
function showThisName() {
    console.log(this.name)
}

function update(birthYear, occupation) {
    this.birthYear = birthYear
    this.occupation = occupation
}

update.apply(mike, [1999, 'singer'])
console.log(mike)

update.apply(tom, [2002, 'teacher'])
console.log(tom) */

/* // const minNum = Math.min(3, 10, 1, 6, 4)
// const maxNum = Math.max(3, 10, 1, 6, 4)

// const nums = [3, 10, 1, 6, 4]
// const minNum = Math.min(...nums)
// const maxNum = Math.max(...nums)

const nums = [3, 10, 1, 6, 4]
const minNum = Math.min.apply(null, nums)
// = Math.min.apply(null, [3, 10, 1, 6, 4])
const maxNum = Math.max.call(null, ...nums)
// = Math.max.call(null, 3, 10, 1, 6, 4)

console.log(minNum) // 1
console.log(maxNum) // 10 */

// bind
// 함수의 this 값을 영구히 바꿀 수 있음
/* const mike = {
    name: 'Mike'
}
function update(birthYear, occupation) {
    this.birthYear = birthYear
    this.occupation = occupation
}
const updateMike = update.bind(mike)

updateMike(1980, "police")
console.log(mike) */

/* const user = {
    name: 'Mike',
    showName: function () {
        console.log(`hello, ${this.name}`)
    }
}
user.showName() //hello, Mike

let fn = user.showName
fn()    // hello,
fn.call(user)   //hello, Mike
fn.apply(user)   //hello, Mike

let boundfn = fn.bind(user)
boundfn()   //hello, Mike */