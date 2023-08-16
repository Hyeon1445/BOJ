const [[N, Q], ...inputs] = require("fs")
  .readFileSync("Q12837/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((input) => input.split(" ").map(Number));
const arr = new BigInt64Array(N + 1);

class SegmentTree {
  constructor(arr, start = 0, end = arr.length - 1, node = 1) {
    const width = 2 ** Math.ceil(Math.log2(arr.length));
    this.tree = new BigInt64Array(2 * width);
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
    if (start > right || end < left) return 0n;
    if (start >= left && end <= right) return this.tree[node];
    let mid = parseInt((start + end) / 2);
    return (
      this.getSum(left, right, start, mid, 2 * node) +
      this.getSum(left, right, mid + 1, end, 2 * node + 1)
    );
  }

  update(index, val, start = this.start, end = this.end, node = this.node) {
    if (index < start || index > end) return;
    this.tree[node] += val;
    if (start === end) return;
    let mid = parseInt((start + end) / 2);
    this.update(index, val, start, mid, 2 * node);
    this.update(index, val, mid + 1, end, 2 * node + 1);
    if (node === 1) this.arr[index] = val;
  }
}

const tree = new SegmentTree(arr, 1, N, 1);
tree.initTree();

const answer = [];
for (let i = 0; i < Q; i++) {
  let [a, b, c] = inputs[i];
  if (a === 1) tree.update(b, BigInt(c));
  else answer.push(tree.getSum(b, c));
}

console.log(answer.join("\n"));
