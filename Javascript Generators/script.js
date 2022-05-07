function* generateId() {
    let id = 1

    while (true) {
        const increment = yield id
        if (increment != null) {
            id += increment
        } else {
            id++
        }
    }
}

const generatorObject = generateId()
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.throw(new Error("Hi ^^")))
console.log(generatorObject.next())