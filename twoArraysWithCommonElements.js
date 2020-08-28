// v1.0 for loop
function commonElements(arr1, arr2) {
  const matches = [];
  let i, len = arr1.length;
  for (i = 0; i < len; i++) {
    if (arr2.includes(arr1[i])) {
      if(!matches.includes(arr1[i])) {
        matches.push(arr1[i]);
      }
    }    
  }
  return matches;
}

// // v1.1
// function commonElements(arr1, arr2) {
// let unique = new Set(arr1);
// const matches = [];
// for (let item of unique) {
//   if (arr2.includes(item)) {
//     matches.push(item);
//     }
//   }
// return matches;
// }

// // v1.2 Array method .forEach()
// function commonElements(arr1, arr2) {
//   const matches = [];
//   arr1.forEach(element => {
//     if (arr2.includes(element)) {
//       if(!matches.includes(element)) {
//         matches.push(element);
//       }
//     }
//   });
//   return matches;
// }

// // v2.0
// function commonElements(arr1, arr2) {
//   return arr1.filter((element, position) => {
//     if (arr1.indexOf(element) === position)
//       return arr2.includes(element);
//   });
// }

console.log(commonElements([1, 2, 3, 4, 4, 6], [3, 4, 5, 6])); // <--- [ 3, 4, 6 ]



