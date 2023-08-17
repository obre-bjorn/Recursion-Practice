function totalIntegers(array) {

    if (array.length === 0) return 0

    let total = 0
    let firstArrayValue = array.shift()

    if (Array.isArray(firstArrayValue)) {
        total += totalIntegers(firstArrayValue)
    } else if (Number.isInteger(firstArrayValue)) {
        total++
    }

    return total + totalIntegers(array)


}



var seven = totalIntegers([
    [
        [5], 3
    ], 0, 2, ['foo'],
    [],
    [4, [5, 6]]
]); // 7

console.log(seven)