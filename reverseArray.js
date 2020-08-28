function copyAndReverseArray(array) {
   
   var rArray = array.reverse();
   
   return rArray;
}

/* Do not modify code below this line */

const original = [1, 2, 9, 8];
const reversed = copyAndReverseArray(original);
console.log(original, '<-- should still be [1, 2, 9, 8]');
console.log(reversed, '<-- should be [8, 9, 2, 1]');