function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

function ThreeNumberSum(arr, target) {
  let result = [];

  // first sort the array
  let sortedArr = sortArray(arr);

  // start with first num in the arr
  for (let i = 0; i < sortedArr.length; i++) {
    // subtract it from the target and store
    let currTarget = target - sortedArr[i];

    // create a set to store all following nums in array looked at
    let existingNumbers = new Set();

    // go to next num in the array
    for (let j = i + 1; j < arr.length; j++) {
      // if a number already looked at = target - arr[i] - arr[j] => then 3sum found
      if (existingNumbers.has(currTarget - sortedArr[j])) {
        result.push([sortedArr[i], sortedArr[j], currTarget - sortedArr[j]]);
      } else {
        // not a match, add to existing nums looked at for arr[j] and proceed
        existingNumbers.add(sortedArr[j]);
      }
    }
  }

  // sort each inner array in result
  for (let i = 0; i < result.length; i++) {
    result[i] = sortArray(result[i]);
  }
  return result;
}

ThreeNumberSum([-8, -6, 1, 2, 3, 5, 6, 12], 0);
