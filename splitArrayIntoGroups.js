/*
Write a function that splits an array (first arg) into groups the length of size (second arg) and returns them as a two-dimensional array
*/

function chunkArrayInGroups(arr, size) {
  let newArr = [];

  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
