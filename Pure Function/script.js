const array = [1, 2, 3]

addElementToArray(array, 4)
[1, 2, 3, 4]

function addElementToArray(a, element) {
    return [...a, element, Math.random()]
}