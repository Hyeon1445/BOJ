const [NM, ...inputs] = require("fs")
  .readFileSync("Q2357/input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = NM.split(" ").map(Number);
const arr = Array.from({ length: N }, (_, index) => Number(inputs[index]));

class MaxSegmentTree {
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
    this.tree[node] = Math.max(
      this.initTree(start, mid, 2 * node),
      this.initTree(mid + 1, end, 2 * node + 1)
    );
    return this.tree[node];
  }

  getMax(left, right, start = this.start, end = this.end, node = this.node) {
    if (start > right || end < left) return 0;
    if (start >= left && end <= right) return this.tree[node];
    let mid = parseInt((start + end) / 2);
    return Math.max(
      this.getMax(left, right, start, mid, 2 * node),
      this.getMax(left, right, mid + 1, end, 2 * node + 1)
    );
  }
}

class MinSegmentTree {
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
    this.tree[node] = Math.min(
      this.initTree(start, mid, 2 * node),
      this.initTree(mid + 1, end, 2 * node + 1)
    );
    return this.tree[node];
  }

  getMin(left, right, start = this.start, end = this.end, node = this.node) {
    if (start > right || end < left) return Infinity;
    if (start >= left && end <= right) return this.tree[node];
    let mid = parseInt((start + end) / 2);
    return Math.min(
      this.getMin(left, right, start, mid, 2 * node),
      this.getMin(left, right, mid + 1, end, 2 * node + 1)
    );
  }
}

const maxTree = new MaxSegmentTree(arr);
maxTree.initTree();
const minTree = new MinSegmentTree(arr);
minTree.initTree();

for (let i = N; i < N + M; i++) {
  const [left, right] = inputs[i].split(" ").map(Number);
  console.log(
    [
      minTree.getMin(left - 1, right - 1),
      maxTree.getMax(left - 1, right - 1),
    ].join(" ")
  );
}
