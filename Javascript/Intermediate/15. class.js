// class
// ES6에 추가된 스펙
const User = function (name, age) {
    this.name = name
    this.age = age
    this.showName = function () {
        console.log(this.name)
    }
}
const Mike = new User("Mike", 40)

class User2 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    showName() {
        console.log(this.name)
    }
}
const tom = new User2("Tom", 19)