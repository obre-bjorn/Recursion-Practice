function contains(obj, data) {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            return contains(obj[key], data)
        }
        if (obj[key] === data) {
            return true
        }
    }

    return false


}

let nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false


console.log(hasIt)
console.log(doesntHaveIt)