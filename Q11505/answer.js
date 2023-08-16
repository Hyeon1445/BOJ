const input = require("fs")
  .readFileSync("Q11505/input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M, K] = input[0].split(" ").map(Number);
const arr = Array.from({ length: N + 1 }, (_, index) =>
  index === 0 ? 1n : BigInt(input[index])
);
const mod = 1_000_000_007n;

class SegmentTree {
  constructor(arr, start = 0, end = arr.length - 1, node = 1) {
    const width = 2 ** Math.ceil(Math.log2(arr.length));
    this.tree = new Array(2 * width).fill(1);
    this.arr = arr;
    this.start = start;
    this.end = end;
    this.node = node;
    this.val = null;
  }

  initTree(start = this.start, end = this.end, node = this.node) {
    if (start === end) {
      this.tree[node] = this.arr[start];
      return this.tree[node];
    }
    let mid = parseInt((start + end) / 2);
    this.tree[node] =
      this.initTree(start, mid, 2 * node) *
      this.initTree(mid + 1, end, 2 * node + 1);
    return this.tree[node];
  }

  multiply(left, right, start = this.start, end = this.end, node = this.node) {
    if (start > right || end < left) return 1n;
    if (start >= left && end <= right) return this.tree[node];
    let mid = parseInt((start + end) / 2);
    return (
      (this.multiply(left, right, start, mid, 2 * node) *
        this.multiply(left, right, mid + 1, end, 2 * node + 1)) %
      mod
    );
  }

  update(index, val, start = this.start, end = this.end, node = this.node) {
    if (index < start || index > end) return this.tree[node];
    if (start === end) return (this.tree[node] = val);
    const mid = parseInt((start + end) / 2);
    this.tree[node] =
      (this.update(index, val, start, mid, 2 * node) *
        this.update(index, val, mid + 1, end, 2 * node + 1)) %
      mod;
    if (node === 1) this.arr[index] = val;
    return this.tree[node];
  }
}

const tree = new SegmentTree(arr, 1);
tree.initTree();

const answer = [];
for (let i = N + 1; i < N + 1 + M + K; i++) {
  let [a, b, c] = input[i].split(" ").map(Number);
  if (a === 1) tree.update(b, BigInt(c));
  else answer.push(tree.multiply(b, c) % mod);
}

console.log(answer.join("\n"));
