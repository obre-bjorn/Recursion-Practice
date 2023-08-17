function sumRange(number, total = 0) {
    if (number === 1) {
        return 1
    }
    total += number
    return sumRange(number - 1, total)

}

console.log(sumRange(3))