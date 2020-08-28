// Reverse a String
function reverseWords(phrase) {
  let newString = "";
  //console.log(phrase.length);
  for (let i = phrase.length - 1; i >= 0; i--) { 
        newString += phrase[i];
  }
  return newString;
}

console.log(reverseWords('Brandy Eyre'));