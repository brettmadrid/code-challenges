// Write a function that returns counts of each character in the string
// example: charCount('aabc') => { a: 2, b: 1, c: 1}
// case insensitive
// return an object with lowercase alphanumeric characters in the string as keys,
// and counts of each character as values

const charCount = str => {
  // make object to return
  let result = {};
  let regexp = /[a-z0-9]/; // regex for alphanumeric characters
  // loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    // test to see if char is alphanumeric
    if (regexp.test(char)) {
      // if char is alphanumeric and a key in object, add one to count
      if (result[char] > 0) {
        result[char]++;

        // if char is alphanumeric and not a key in object, add new key with count of 1
      } else {
        result[char] = 1;
      }
    }
  }
  // if char is something elese (space, period, etc.) don't do anything
  // return object at end
  return result;
};

console.log(`charCount`, charCount("Badd!"));
