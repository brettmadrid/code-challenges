function collatzSequence(n) {
  let collatzArray = [n];
  while (n > 1) {
      if (collatzArray[collatzArray.length-1]%2 == 0) {
        n = n/2;
        collatzArray.push(n);
      } else {
        n = n*3+1;
        collatzArray.push(n);
      }
  } 
  
  return collatzArray;
}