function staircase(n) {
  let z = 6;

  for (var i = 1; i <= z; i++) {
    let myString = "";
    let col = i;

    for (var j = 1; j <= z - col; j++) {
      myString += " ";
    }
    for (var j = 1; j <= col; j++) {
      myString += "#";
    }

    console.log(myString);
  }
}

staircase(6);
