// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

// const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

// let firstItem = function(arr) {
//   return arr[0];
// };

// let getLength = function(arr) {
//   return arr.length;
// };

// let lastItem = function(arr) {
//   const length = arr.length - 1;
//   return arr[length];
// };

// let get = function(arr, callback) {
//   return callback(arr);
// };

// console.log(get(items, firstItem));
// console.log(get(items, getLength));
// console.log(get(items, lastItem));

// function inList(item, arr) {
//   const result = arr.some(elem => elem === item);
//   return result;
// }

// function contains(item, arr, callback) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
//   return callback(item, arr);
// }

// console.log(contains("Pencil", items, inList));
// console.log(contains("Hat", items, inList));

// /* STRETCH PROBLEM */

// // removeDuplicates removes all duplicate values from the given array.
// // Pass the duplicate free array to the callback function.
// // Do not mutate the original array.
let myArray = [1, 2, 2, 3];

function removeDups(arr) {
    let unique_array = arr.filter(function(elem, index, self) {
          return index === self.indexOf(elem);
      });
    return unique_array;
  }

function removeDuplicates(arr, callback) {
  return callback(arr);
}

console.log(removeDuplicates(myArray,removeDups));
console.log(myArray);
