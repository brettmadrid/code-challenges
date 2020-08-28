function longestString(arr) {
  let longStringLngth = 0;
  let longString = '';
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longStringLngth) {
      longString = arr[i];
      longStringLngth = arr[i].length;
    }
  }
  return(longString);
}

const strings1 = ['short', 'really, really long', 'medium'];
console.log(longestString(strings1));