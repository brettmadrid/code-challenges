function compressString(S, K) {
  if (S.length == 0) return;

  let sMap = new Map();
  let output = "";
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    count++;
    if (S[i] != S[i + 1]) {
      let sCount = sMap.get(S[i]);

      if (sCount) {
        sMap.set(S[i], sCount + count);
      } else {
        sMap.set(S[i], count);
      }
      count = 0;
    }
  }

  function logMapElements(value, key, map) {
    if (value === 1) {
      if (K === 0) output += key;
      K--;
    } else {
      if (!(K - value === 0)) {
        output += value + key;
      }
    }
  }

  sMap.forEach(logMapElements);

  return output;
}

let myString = "AAAAAAAAAAABCXXDZAAAAAAAAAA";
console.log(compressString(myString, 4));
