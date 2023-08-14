const [str1, str2, str3] = require("fs")
  .readFileSync("Q1958/input.txt")
  .toString()
  .trim()
  .split("\n");

const getLcs = (s1, s2, s3) => {
  const array = Array.from({ length: s3.length + 1 }, () =>
    Array.from({ length: s2.length + 1 }, () =>
      Array.from({ length: s1.length + 1 }, () => 0)
    )
  );
  for (let i = 1; i <= s3.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      for (let k = 1; k <= s1.length; k++) {
        array[i][j][k] =
          s3[i - 1] === s2[j - 1] && s2[j - 1] === s1[k - 1]
            ? array[i - 1][j - 1][k - 1] + 1
            : Math.max(
                array[i - 1][j][k],
                array[i][j - 1][k],
                array[i][j][k - 1]
              );
      }
    }
  }
  return array[s3.length][s2.length][s1.length];
};

console.log(getLcs(str1, str2, str3));
