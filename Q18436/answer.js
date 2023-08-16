const [[N], numbers, [M], ...inputs] = require("fs")
  .readFileSync("Q18436/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((input) => input.split(" ").map(Number));

class SegmentTree {
  constructor(arr, start = 0, end = arr.length - 1, node = 1) {
    const width = 2 ** Math.ceil(Math.log2(arr.length));
    this.tree = new Array(2 * width).fill(0);
    this.arr = arr;
    this.start = start;
    this.end = end;
    this.node = node;
    this.val = null;
  }

  initTree(start = this.start, end = this.end, node = this.node) {
    if (start == end) {
      this.tree[node] = this.arr[start];
      return this.tree[node];
    }
    let mid = parseInt((start + end) / 2);
    this.tree[node] += this.initTree(start, mid, 2 * node);
    this.tree[node] += this.initTree(mid + 1, end, 2 * node + 1);
    return this.tree[node];
  }

  getSum(left, right, start = this.start, end = this.end, node = this.node) {
    if (start > right || end < left) return 0;
    if (start >= left && end <= right) return this.tree[node];
    let mid = parseInt((start + end) / 2);
    return (
      this.getSum(left, right, start, mid, 2 * node) +
      this.getSum(left, right, mid + 1, end, 2 * node + 1)
    );
  }

  update(index, val, start = this.start, end = this.end, node = this.node) {
    if (index < start || index > end) return;
    let diff = val - this.arr[index];
    this.tree[node] += diff;
    if (start == end) return;
    let mid = parseInt((start + end) / 2);
    this.update(index, val, start, mid, 2 * node);
    this.update(index, val, mid + 1, end, 2 * node + 1);
    if (node == 1) this.arr[index] = val;
  }
}

const oddArray = [0, ...numbers.map((input) => input % 2)];
const tree = new SegmentTree(oddArray, 1, N, 1);
tree.initTree();

const answer = [];
for (let i = 0; i < M; i++) {
  let [a, b, c] = inputs[i];
  if (a === 1) tree.update(b, c % 2);
  else if (a === 2) answer.push(c - b + 1 - tree.getSum(b, c));
  else answer.push(tree.getSum(b, c));
}

console.log(answer.join("\n"));
