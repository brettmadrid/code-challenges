function whatIsInAName(collection, source) {
  // get source keys in an array
  const srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter((obj) => {
    for (let i in srcKeys) {
      if (
        // if obj in collection array does not have key from srcKeys array
        !obj.hasOwnProperty(srcKeys[i]) ||
        // if obj in collection has a different value for the matching key
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false; // do not add object to filter array
      }
    }
    return true; // return new filtered array
  });
}

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);
