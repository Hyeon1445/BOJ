const [[N, Q], numbers, ...inputs] = require("fs")
  .readFileSync("Q1275/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((input) => input.split(" "));

const arr = Array.from({ length: numbers.length + 1 }, (_, index) => {
  return index === 0 ? 0n : BigInt(numbers[index - 1]);
});

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
    if (start === end) {
      this.tree[node] = this.arr[start];
      return this.tree[node];
    }
    let mid = parseInt((start + end) / 2);
    this.tree[node] =
      this.initTree(start, mid, 2 * node) +
      this.initTree(mid + 1, end, 2 * node + 1);
    return this.tree[node];
  }

  getSum(left, right, start = this.start, end = this.end, node = this.node) {
    if (start > right || end < left) return 0n;
    if (start >= left && end <= right) return this.tree[node];
    const mid = parseInt((start + end) / 2);
    return (
      this.getSum(left, right, start, mid, 2 * node) +
      this.getSum(left, right, mid + 1, end, 2 * node + 1)
    );
  }

  update(index, val, start = this.start, end = this.end, node = this.node) {
    if (index < start || index > end) return;
    const diff = val - this.arr[index];
    this.tree[node] += diff;
    //if (start === end) return tree[node];
    if (start !== end) {
      const mid = parseInt((start + end) / 2);
      this.update(index, val, start, mid, 2 * node);
      this.update(index, val, mid + 1, end, 2 * node + 1);
    }
    if (node === 1) this.arr[index] = val;
  }
}

const tree = new SegmentTree(arr, 1);
tree.initTree();

const answer = [];
for (let i = 0; i < Number(Q); i++) {
  let [x, y, a, b] = inputs[i];
  answer.push(
    Number(x) > Number(y)
      ? tree.getSum(Number(y), Number(x))
      : tree.getSum(Number(x), Number(y))
  );
  tree.update(Number(a), BigInt(b));
}

console.log(answer.join("\n"));
