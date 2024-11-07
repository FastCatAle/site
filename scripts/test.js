const size = 8;
let board = "";
for (let y = 0; y < size; y++) {
  if (board.length % size === 0) {
    //console.log("\n");
    board = board + "\n";
  } else {
    console.log(board.length);
  }
  for (let x = 0; x < size; x++) {
    if (x === 1) {
      board = board + " ";
      continue;
    } else if (x % 2 != 0) {
      board = board + " ";
      continue;
    } else {
      board = board + "#";
    }
  }
}

console.log(board);
console.log(board.length / 8);
