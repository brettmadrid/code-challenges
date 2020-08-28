function toRoman(num) {
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let result = '';
    // Now check to see if num is dividable by 1000, 500, 100, etc.
    // Once a value in the decimal array that is smaller or equal 
    // to num if found, then subtract the remainder from num and 
    // push the matching roman number in a result string. 
    // Then, using the new number (subtract remainder from num) repeat until zero
    for (let i=0; i<=decimal.length; i++) {
        //loop over every element of the decimal array
        while (num % decimal[i] < num) {
        // look for the the smallest or equal value in the decimal array
            result  += roman[i];
            // add the matching roman number to the result string
            num -= decimal[i];
        }
    }
    return result;
}

function fromRoman(str) {  
    var result = 0;
    // the result is now a number, not a string
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
    for (var i = 0;i<=decimal.length;i++) {
      while (str.indexOf(roman[i]) === 0){
      //checking for the first characters in the string
        result += decimal[i];
        //adding the decimal value to our result counter
        str = str.replace(roman[i],'');
        //remove the matched Roman letter from the beginning
      }
    }
    return result;
  }

console.log(toRoman(1973));
console.log(fromRoman('MCMLXXIII'));