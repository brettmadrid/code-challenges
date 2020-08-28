// curried function
function tripleAdd(num1) {
    return function(num2) {
        return function(num3, num4) {
            return num1 + num2 + num3 + num4;
        }
    }
}

// non curried version
function tripleAdd1(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
}

console.log(tripleAdd(10)(20)(30, 40));
console.log(tripleAdd1(10, 20, 30, 40));