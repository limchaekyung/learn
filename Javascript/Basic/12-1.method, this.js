// method : 객체 프로퍼티로 할당된 함수
/* const superman = {
    name: 'clark',
    age: 33,
    // fly: function () {
    fly() {
        console.log('날아갑니다.')
    }
}
superman.fly()  // 날아갑니다. */

// this
/*
화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않음
화살표 함수 내에서 this를 사용하면, 그 this는 외부에서 값을 가져 옴
*/
/* const user = {
    name: 'Mike',
    sayHello: function () {
        console.log(`Hello, I'm ${this.name}`)
    }
}

user.sayHello() // Hello, I'm Mike */

/* let boy = {
    name: 'Mike',
    sayHello: () => {
        console.log(this);  // 전역객체, 사용하지 않는 게 좋음.
        // 브라우저 환경 : window
        // Node js : global
    }
}

boy.sayHello()
// this != boy */

// method
/* let boy = {
    name: 'Mike',
    showName: function () {
        // console.log(boy.name)
        console.log(this.name)
    }
}

let man = boy
boy.showName()  // Mike

// man.name = 'Tom'
// console.log(boy.name)   //Tom

boy = null
man.showName()  //boy.name = typeError, this.name = Mike */