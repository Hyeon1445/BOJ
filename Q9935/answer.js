const [input, word] = require("fs")
  .readFileSync("Q9935/input.txt")
  .toString()
  .trim()
  .split("\n");
// const [input, word] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const solution = (input, word) => {
  const answer = [];
  loop: for (let i = 0; i < input.length; i++) {
    answer.push(input[i]);
    if (
      answer.length >= word.length &&
      answer[answer.length - 1] === word[word.length - 1]
    ) {
      for (let j = 0; j < word.length; j++) {
        if (answer[answer.length - 1 - j] !== word[word.length - 1 - j])
          continue loop;
      }
      for (let j = 0; j < word.length; j++) {
        answer.pop();
      }
    }
  }

  return answer.length ? answer.join("") : "FRULA";
};

console.log(solution(input, word));
