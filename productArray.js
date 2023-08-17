function productOfArray(array) {
    let arrayCopy = array.slice()


    if (arrayCopy.length === 0) {
        return 0
    } else if (arrayCopy.length === 1) {
        return arrayCopy[0]
    }
    let forntValue = arrayCopy.shift()
    return forntValue * productOfArray(arrayCopy)

}

console.log(productOfArray([1, 2, 3, 10]));