function checkNumber(num) {
    return num < 7
}

function all(arr, callback) {

    var copyArr = copyArr || arr.slice()

    if (arr.length === 0) {
        return true
    }
    if (callback(arr[0])) {
        copyArr.shift()
        return all(copyArr, callback)
    } else {
        return false
    }


}




console.log(all([5, 3, 4], checkNumber));