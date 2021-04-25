function ChessGrid(size) {
  let chString = "";

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      (i + j) % 2 === 0 ? (chString += " ") : (chString += "#");
    }

    chString += "\n";
  }

  console.log(chString);
}

ChessGrid(8);
