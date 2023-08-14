const [str1, str2] = require("fs")
  .readFileSync("Q15482/input.txt")
  .toString()
  .trim()
  .split("\n");

const getLcsLength = (s1, s2) => {
  const array = Array.from({ length: s2.length + 1 }, () =>
    Array.from({ length: s1.length + 1 }, () => 0)
  );
  for (let i = 1; i <= s2.length; i++) {
    for (let j = 1; j <= s1.length; j++) {
      array[i][j] =
        s2[i - 1] === s1[j - 1]
          ? array[i - 1][j - 1] + 1
          : Math.max(array[i - 1][j], array[i][j - 1]);
    }
  }
  return array[s2.length][s1.length];
};

console.log(getLcsLength(str1, str2));
