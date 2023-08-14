const [N, str] = require("fs")
  .readFileSync("Q5502/input.txt")
  .toString()
  .trim()
  .split("\n");

const getLcs = (str) => {
  const length = Number(N);
  const array = Array.from({ length: length + 1 }, () =>
    Array.from({ length: length + 1 }, () => 0)
  );
  for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= length; j++) {
      array[i][j] =
        str[i - 1] === str[length - j]
          ? array[i - 1][j - 1] + 1
          : Math.max(array[i - 1][j], array[i][j - 1]);
    }
  }
  return array[Number(N)][Number(N)];
};

console.log(Number(N) - getLcs(str));
