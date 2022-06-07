// 객체 리터럴
/* let user = {
    name: 'Mike',
    age: 30
} */

// 생성자 함수
/* function User(name, age) {
    // 첫문자는 대글자로

    // this = {}

    this.name = name
    this.age = age

    // return this
}

let user1 = new User('Mike', 30)
let user2 = new User('Jane', 22)
let user3 = new User('Tom', 17)
// new 연산자를 사용해서 함수 호출 */

/* function User(name, age) {
    this.name = name
    this.age = age
    this.sayName = function () {
        console.log(this.name)  // this -> user5
    }
}
let user5 = new User('Han', 40)
user5.sayName() //'Han' */

// 생성자 함수: 상품 객체 생성
function Item(title, price) {
    // this = {}
    this.title = title
    this.price = price
    this.showPrice = function () {
        console.log(`가격은 ${price}원 입니다.`)
    }

    // return this
}

const item1 = new Item('인형', 3000)
const item2 = new Item('가방', 4000)    // new를 붙이지 않으면 undefined
const item3 = new Item('지갑', 9000)

console.log(item1, item2, item3)

item3.showPrice()   // 가격은 9000원 입니다.