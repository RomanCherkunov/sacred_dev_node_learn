const isString = (param) => {
    return typeof param === 'string'
}

const compareString = (leftString, rightString) => {
    if(!isString(leftString) || !isString(rightString)) {
        return false
    }
    return leftString.toUpperCase() === rightString.toUpperCase()
}

const compareStringInArray = (itemString, arrayOfString) => {
    if(!itemString || !Array.isArray(arrayOfString)) {
        return false
    }
    let findItem = arrayOfString.filter(str => compareString(str, itemString))
    return findItem.length > 0
}

module.exports = { compareString, compareStringInArray }