/**
 * Return the second largest number in the array.
 *
 */

function getSecondLargest(nums) {
  // copy the sorted array into a set to delete values
  const mySet = new Set([...nums.sort((a, b) => a - b)]);

  // copy set into an array
  const myNums = [...mySet];

  // if array has one or less items return
  if (myNums.length <= 1) return;

  // return second to last array element
  return myNums[myNums.length - 2];
}

console.log(getSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
