/* * Complete the 'fibonacci' function below. *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER n as parameter.
 */

function fibRecursive(num) {
  if (num === 1) return 1;
  if (num === 0) return 0;
  return fibRecursive(num - 1) + fibRecursive(num - 2);
}

function fibonacci(n) {
  // start off sequence array with zero
  let sequence = [0];

  // if n is 1 or 0, sequence is zero
  if (n < 2) {
    sequence = [0];
  } else {
    for (let i = 1; i < n; i++) {
      sequence.push(fibRecursive(i));
    }
  }

  return sequence;
}

console.log(fibonacci(8));
