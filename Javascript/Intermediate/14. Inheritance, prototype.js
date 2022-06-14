// 상속
/* const bmw = {
    color: "red",
    wheels: 4,
    navigation: 1,
    drive() {
        console.log("drive...")
    }
}
const benz = {
    color: "black",
    wheels: 4,
    drive() {
        console.log("drive...")
    }
}
const audi = {
    color: "blue",
    wheels: 4,
    drive() {
        console.log("drive...")
    }
} */
/* const car = {
    wheels: 4,
    drive() {
        console.log("drive...")
    }
}
const bmw = {
    color: "red",
    navigator: 1
}
const benz = {
    color: "black"
}
const audi = {
    color: "blue"
} */

/* const car = {
    wheels: 4,
    drive() {
        console.log("drive...")
    }
}
const bmw = {
    color: "red",
    navigator: 1
}
bmw.__proto__ = car
const x5 = {
    color: "white",
    name: "x5"
}
x5.__proto__ = bmw */

/* 
Prototype Chain
car        <- bmw            <- x5
wheels: 4     color: 'red'      color: 'white'
drive()       navigation: 1     name: 'x5'
__proto__     __proto__         __proto__
*/

/* const car = {
    wheels: 4,
    drive() {
        console.log("drive..")
    }
}
const Bmw = function (color) {
    this.color = color
}
const x5 = new Bmw("red")
const y4 = new Bmw("blue")

x5.__proto__ = car
y4.__proto__ = car */

/* const Bmw = function (color) {
    this.color = color
}

// Bmw.prototype.wheels = 4
// Bmw.prototype.drive = function () {
//     console.log("drive..")
// }
// Bmw.prototype.navigation = 1
// Bmw.prototype.stop = function () {
//     console.log("STOP!")
// }
Bmw.prototype = {
    constructor: Bmw,
    wheels: 4,
    drive() {
        console.log("drive..")
    },
    navigation: 1,
    stop() {
        console.log("STOP!")
    }
}

const x5 = new Bmw("red")
const y4 = new Bmw("blue") */

const Bmw = function (color) {
    const c = color
    this.getColor = function () {
        console.log(c)
    }
}
const x5 = new Bmw("red")