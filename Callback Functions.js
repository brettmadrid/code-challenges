/* For each example of code please identy 
   the higher order function and the callback function(s) */
   
/* For both types of functions, you will describe the 
   parameters and return values (if any) */

// Question 1:

function returned() {
  console.log("The king hath returned from the hunt!");
};

function death() {
  console.log("The king is dead!");
}

function birth() {
  console.log("An heir has been born today!");
}

function announce(cb) {
  console.log("Hear ye! Hear ye!");
  cb();
}

announce(returned);
announce(birth);
announce(death);

/**
  1a) What is the higher order function is this example? List the parameters and return values. 
		the function announce(cb) is the higher order function.
  1b) What are the callbacks in this example? List the parameters and return values for each.  
		the callbacks are the functions: 1. returned() - no return; 2. death() - no return; 3. birth() - no return; All 3 callbacks simply log a statement to the screen.
*/

// Question 2:

function addFn(x, y) {
  return x + y;
}

function subtractFn(x, y) {
  return x - y;
}

function combine(x, y, cb) {
  return cb(x, y);
}

const result1 = combine(1, 4, addFn);
const result2 = combine(9, -2, subtractFn);
const result3 = combine(2, 3, function(x, y) {
  return x * y;
})

/**
  2a) What is the higher order function? List the parameters and return values. 
		The higher order function is the function combine(x, y, cb) and the parameters are two numbers and a callback function.  It returns the return value of the callback function it calls.  So, the return values for each of the three are:
			1. combine(1, 4, addFn) - returns the value of 5, which is the return value of the callback function addFn(x, y).
			2. combine(9, -2, subtractFn) - returns the value of 11, which is the value of the callback function subtractFn(x, y).  
			3. combine(2, 3, function(x, y) - returns the value of 6, which is the value of the non specific callback function called inline.
  2b) What are the callbacks? List the parameters and return values for each.  
		The callbacks are: 1. addFn(x, y) - receives two numbers and returns the sum of both.
						   2. subtractFn(x, y) - receives two numbers and returns the first minus the second.
						   3. the non-specific callback function declared inline function(x, y) { return x * y; } - receives two numbers and returns the product of the two.
*/


// Question 3:

function addExcitement(string) {
  return 'string' + '!';
}

const phrases = [ 'A fish rots from the head down', 'A rolling stone gathers no moss', 'A rose is a rose is a rose'];
const excitedPhrases = phrases.map(addExcitement);

/**
  3a) What is the higher order function? List the parameters and return values. 
		The higher order function is the phrases.map(addExcitement) which is stored in the variable excitedPhrases. The parameters are a cb function that itself requires the array phrases as it's parameter.
  3b) What are the callbacks? List the parameters and return values for each. 
		The callback is addExcitement(string) - the parameter is a string passed in by the array: phrases via the map function.  The return value is the same string back out with an exclamation point added to it.
*/


// Stretch Question 4:

function findLongest(str1, str2) {
  const firstLonger = str1.length >= str2.length;

  if (firstLonger) {
    return str1;
  } else {
    return str2;
  }
}

const words = [ 'cattywampus', 'snickersnee', 'lollygag', 'pandiculation', 'ratoon' ];
const phrases = [ 'A fish rots from the head down', 'A rolling stone gathers no moss', 'A rose is a rose is a rose'];

const longestWord = words.reduce(findLongest);
const longestPhrase = phrases.reduce(findLongest);

/**
  4a) What is the higher order function? List the parameters and return values.
		The higher order functions are: 1. words.reduce(findLongest) which is stored in the constant longestWord. The parameters are the two arrays passed in for both arrays using the reduce method.  The return values are the longest word and longest phrase respectively for the two.
										2. phrases.reduce(findLongest) which is stored in the constant longestPhrase.
  4b) What are the callbacks? List the parameters and return values for each. 
		The callback is the function findLongest which receives two strings as parameters and returns the longest of the two.
*/