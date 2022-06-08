// Computed property
/* let a = 'age'

const user = {
    name: 'Mike',
    // age : 30,
    [a]: 30    // age : 30
    // computed prroperty(계산된 프로퍼티)
} */

/* const user = {
    [1 + 4]: 5,
    ["안녕" + "하세요"]: "Hello"
} */

// Methods
// Object.assign() : 객체 복제
/* const user = {
    name: 'Mike',
    age: 30
}
const newUser = Object.assign({}, user)
// {}: 빈 객체, user : 초기값
Object.assign({ gender: 'male' }, user)
Object.assign({ name: 'Tom' }, user)

newUser.name = 'Tom'
console.log(user.name)  // Mike
newUser != user */

/* const user = {
    name: 'Mike'
}
const info1 = {
    age: 30
}
const info2 = {
    gender: 'male'
}
Object.assign(user, info1, info2) */

// Object.keys() : 키 배열 반환
/* const user = {
    name: 'Mike',
    age: 30,
    gender: 'male'
}

Object.keys(user)   // ['name', 'age', 'gender'] */

// Object.values() : 값 배열 반환
/* const user = {
    name: 'Mike',
    age: 30,
    gender: 'male'
}

Object.values(user)   // ['Mike', 30, 'male'] */

// Object.entries() : 키/값 배열 반환
/* const user = {
    name: 'Mike',
    age: 30,
    gender: 'male'
}

Object.entries(user) */
/* [
    ["name", "Mike"],
    ["age", 30],
    ["gender", "male"]
] */

// Object.fromEntries() : 키/값 배열을 객체로
/* const arr = [
    ['name', 'Mike'],
    ['age', 30],
    ['gender', 'male']
]
Object.fromEntries(arr) */
/* {
    name: 'Mike',
    age : 30,
    gender: 'male'
} */

/* let n = "name"
let a = "age"

const user = {
    [n]: "Mike",
    [a]: 30,
    [1 + 4]: 5
}

console.log(user)   // {5: 5, name: "Mike", age: 30} */

/* function makeObj(key, val) {
    return {
        [key]: val,
    }
}

const obj = makeObj("나이", 33)
console.log(obj)    // {"나이", 33} */

const user = {
    name: "Mike",
    age: 30,
}

/* const user2 = Object.assign({}, user)
user2.name = "Tom"

console.log(user)   // {name: "Mike", age: 30}
console.log(user2)  // {name: "Tom", age: 30} */
