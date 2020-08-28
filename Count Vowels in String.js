function countVowels(text) {
    // Search text with Regex and store all matching instances 
    // [aeiou] looks for any of the letters
    // g looks through the entire string passed and returns all matches
    // i means case insensitive
    let matchingInstances = text.match(/[aeiou]/gi);

    // Check if matching instances exist then calculate length
    if(matchingInstances) {
        // Log formatted response to console 
         console.log(`The text contains ${matchingInstances.length} vowel(s)`) 

         // Return number of vowels
        return matchingInstances.length
    } else{
        return 0
    }
}

console.log(vowelCount('-bcd-fgh-jklmn-pqrst-vwxyz'));