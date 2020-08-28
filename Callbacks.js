/* First very simple example calls passes a function as an argument
and then calls it later on within the function.
*/
let x = function() {
    console.log('I am called from inside a function');
}

let y = function(callback) {
    console.log('do something');
    callback();
}

y(x);

/* 
*/

// ES5 syntax
// let add = function(a,b) {
//     return a+b;
// };

// ES6 syntax
let add = (a,b) => a + b;

// let multiply = function(a,b) {
//     return a*b;
// }

let multiply = (a,b) => a * b;

// let subtract = function(a,b) {
//     return a-b;
// }

let subtract = (a,b) => a - b;

// let divide = function(a,b) {
//     return a/b;
// }

let divide = (a,b) => a / b;

let greeting = (a,b) => `Hello ${a} ${b}, nice to meet you!`;

// ES5 format
// let calc = function(num1, num2, callback) {
//     if (typeof callback === 'function') {
//       return callback(num1, num2);
//      }
// }

// ES6 format
let calc = (num1, num2, callback) => {
    if (typeof callback === 'function') {
        return callback(num1, num2);
    } else {
        return `arg passed is not a function.`;
    }

} 
    

// now pass in the desired function as a callback
console.log(calc(5,4,add));
console.log(calc(5,4,multiply));
console.log(calc(5,4,subtract));
console.log(calc(5,4,divide));
console.log(calc('Brett','Madrid',greeting));


// can also pass in as an ar a anonymous function defined on the fly
console.log((calc(5,4,function(a,b){
    return a+b
})));


// Using a callback to sort an array of objects
const myArr = [{
    num: 5,
    str: 'apple'
}, {
    num: 7,
    str: 'cabbage'
}, {
    num: 1,
    str: 'banana'
},
{
    num: 15,
    str: 'zebra'
},
{
    num: 9,
    str: 'yellow'
}];

// passing an anonymous callback function
myArr.sort(function(val1, val2) {
    // just change to the right of the dot whatever object name item to be sorted
    //if (val1.str < val2.str) {
      if (val1.num < val2.num) {
        return -1;
    } else {
        return 1;
    }
});

console.log(myArr.sort());