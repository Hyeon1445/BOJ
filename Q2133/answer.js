const N = +require("fs").readFileSync("Q2133/input.txt").toString().trim();

const array = new Array(N + 1).fill(0);
array[0] = 1;
array[2] = 3;

for (let i = 4; i <= N; i += 2) {
  array[i] = array[i - 2] * 3;
  for (let j = 4; j <= i; j += 2) {
    array[i] += array[i - j] * 2;
  }
}
console.log(array[N]);
