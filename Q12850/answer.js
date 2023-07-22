let D = BigInt(require("fs").readFileSync("Q12850/input.txt").toString());

const mod = BigInt(1000000007);

function mul(a, b) {
  let c = Array.from({ length: 8 }, () => Array(8).fill(0n));

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      for (let k = 0; k < 8; k++) {
        c[i][j] = (c[i][j] + a[i][k] * b[k][j]) % mod;
      }
    }
  }

  return c;
}

let A = [
  [0n, 1n, 1n, 0n, 0n, 0n, 0n, 0n],
  [1n, 0n, 1n, 1n, 0n, 0n, 0n, 0n],
  [1n, 1n, 0n, 1n, 1n, 0n, 0n, 0n],
  [0n, 1n, 1n, 0n, 1n, 1n, 0n, 0n],
  [0n, 0n, 1n, 1n, 0n, 1n, 1n, 0n],
  [0n, 0n, 0n, 1n, 1n, 0n, 0n, 1n],
  [0n, 0n, 0n, 0n, 1n, 0n, 0n, 1n],
  [0n, 0n, 0n, 0n, 0n, 1n, 1n, 0n],
];

let ans = [
  [1n, 0n, 0n, 0n, 0n, 0n, 0n, 0n],
  [0n, 1n, 0n, 0n, 0n, 0n, 0n, 0n],
  [0n, 0n, 1n, 0n, 0n, 0n, 0n, 0n],
  [0n, 0n, 0n, 1n, 0n, 0n, 0n, 0n],
  [0n, 0n, 0n, 0n, 1n, 0n, 0n, 0n],
  [0n, 0n, 0n, 0n, 0n, 1n, 0n, 0n],
  [0n, 0n, 0n, 0n, 0n, 0n, 1n, 0n],
  [0n, 0n, 0n, 0n, 0n, 0n, 0n, 1n],
];

while (D > 0n) {
  if (D % 2n === 1n) {
    ans = mul(ans, A);
  }
  A = mul(A, A);
  D = D / 2n;
}

console.log(ans[0][0].toString());

// 분할 정복, 행렬
