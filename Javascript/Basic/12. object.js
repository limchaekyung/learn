// object
/* const superman = {
    name: 'clark', // 키(key) : 값(value)
    age: 33
}

// 접근
superman.name   // 'clark'
superman['age']    // 33

// 추가
superman.gender = 'male'
superman['hairColor'] = 'black'

// 삭제
delete superman.hairColor */

// object - 단축 프로퍼티
/* const name = 'clack'
const age = 33

const superman = {
    name,   // name: name
    age,    // age: age
    gender: 'male'
} */

// object - 프로퍼티 존재 여부 확인
/* const superman = {
    name: 'clark',
    age: 33,
}

superman.birthDay;  // undefined
'birthDay' in superman  // false
'age' in superman   // true */

// for ... in 반복문
/* for (let key in superman) {
    console.log(key)
    console.log(superman[key])
} */

// 객체
/* function makeObject(name, age) {
    return {
        name,
        age,
        hobby: "football"
    }
}

const Mike = makeObject("Mike", 30)
console.log(Mike)

console.log('age' in Mike)  // true
console.log('birthday' in Mike) // false */

// 객체 in
/* function isAdult(user) {
    if (!('age' in user)    // user에 age가 없거나
        || user.age < 20) { // 20살 이거나
        return false;
    }
    return true;
}

const Mike = {
    name: 'Mike',
    age: 30
}

const Jane = {
    name: 'Jane'
}

console.log(isAdult(Mike))  //true
console.log(isAdult(Jane))  //false */

// 객체 for ... in
/* const Mike = {
    name: 'Mike',
    age: 30
}

for (x in Mike) {
    console.log(Mike[x])  //name, age
} */