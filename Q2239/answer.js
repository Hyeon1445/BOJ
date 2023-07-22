const inputs = require("fs")
  .readFileSync("Q2239/input.txt")
  .toString()
  .trim()
  .split("\n");
const sudoku = new Array(9).fill(null).map((_) => new Array(9).fill(0));
let blank = 0;
let end = 0;

const check = (x, y, sudoku, k) => {
  for (let i = 0; i < 9; i++) {
    if (sudoku[y][i] === k) return false;
  }
  for (let i = 0; i < 9; i++) {
    if (sudoku[i][x] === k) return false;
  }
  x = parseInt(x / 3) * 3;
  y = parseInt(y / 3) * 3;
  for (let i = y; i < y + 3; i++) {
    for (let j = x; j < x + 3; j++) {
      if (sudoku[i][j] === k) return false;
    }
  }
  return true;
};

const solve = (sudoku, blank) => {
  if (blank === 0) {
    console.log(sudoku.map((row) => row.join("")).join("\n"));
    end = true;
  }
  if (end) return 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (sudoku[i][j] === 0) {
        for (let k = 1; k <= 9; k++) {
          if (check(j, i, sudoku, k)) {
            sudoku[i][j] = k;
            solve(sudoku, blank - 1);
            sudoku[i][j] = 0;
          }
          if (k === 9) return;
        }
      }
    }
  }
};

for (let i = 0; i < 9; i++) {
  let row = inputs[i].split("").map(Number);
  for (let j = 0; j < 9; j++) {
    if (row[j] === 0) {
      blank++;
    }
    sudoku[i][j] = row[j];
  }
}
solve(sudoku, blank);
