function power(num, pow) {
    if (pow == 0) {
        return 1
    } else if (pow == 1) {
        return num
    }

    return num * power(num, pow - 1)

}

console.log(power(2, 1));