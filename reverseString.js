// v1.0 for loop
// function longestString(arr) {
// 	let result = '';
// 	for(let index = 0; index < arr.length; index++) {
// 	  let currentItem = arr[index];
// 		if(currentItem.length > result.length) {
// 			result = arr[index];
// 		}
// 	}
// 	return result;
// }

// // v1.1 for loop, declaring variables first
// function longestString(arr) {
// 	let currentItem, index, result = '';
// 	for(index = 0; index < arr.length; index++) {
// 	  currentItem = arr[index];
// 		if(currentItem.length > result.length) {
// 			result = arr[index];
// 		}
// 	}
// 	return result;
// }

// // v1.2 for loop, index starts at 1
// function longestString(arr) {
// 	let currentItem = arr[0];
// 	for(let index = 1; index < arr.length; index++) {
// 		if(arr[index].length > currentItem.length) {
// 			currentItem = arr[index];
// 		}
// 	}
// 	return currentItem;
// }

// // v2.0 for...of
// function longestString(arr) {
// 	let currentItem = arr[0],
// 	    item;
// 	for(item of arr) {
// 		if(item.length > currentItem.length) {
// 			currentItem = item;
// 		}
// 	}
// 	return currentItem;
// }

// // v3.0 ES5 Array method: .forEach()
// function longestString(arr) {
// 	let currentItem = arr[0];
//   arr.forEach(function(item) {
//     if(item.length > currentItem.length) {
//       currentItem = item;
//     }
//   });
// 	return currentItem;
// }

// // v3.1 ES6 .forEach()
// const longestString = (arr) => {
// 	let currentItem = arr[0];
//   arr.forEach((item) => {
//     if(item.length > currentItem.length) {
//       currentItem = item;
//     }
//   });
// 	return currentItem;
// };

// // v4.0 ES5 .sort()
// function longestString(arr) {
//   var sorted = arr.sort(function(a, b) {
//     return b.length - a.length;
//   })[0];
//   return sorted;
// }

// // v4.1 just return it!
// function longestString(arr) {
//   return arr.sort(function(a, b) {return b.length - a.length})[0];
// }

// // v4.2 ES6 .sort()
// const longestString = (arr) => {
//   return arr.sort((a, b) => b.length - a.length)[0];
// };

// // v5.0 ES5 .reduce() and Conditional Ternary operator
// function longestString(arr) {
//   return arr.reduce(function(str1, str2) {
// 		return str1.length - str2.length >= 0? str1 : str2;
// 	});
// }

// v5.1 ES6 .reduce() and Conditional Ternary operator
const longestString = (arr) => {
  return arr.reduce((str1, str2) => {
    return str1.length - str2.length >= 0 ? str1 : str2;
  });
};

const strings1 = ["short", "really, really long!", "medium"];
// console.log(longestString(strings1)); // <--- 'really, really long!'
// const strings2 = ['short', 'first long string!', 'medium', 'abcdefghijklmnopqr'];
// console.log(longestString(strings2)); // <--- 'first long string!'
console.log(longestString(strings1));
