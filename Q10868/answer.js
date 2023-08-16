const [NM, ...inputs] = require("fs")
  .readFileSync("Q10868/input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = NM.split(" ").map(Number);

class MinSegmentTree {
  constructor(start = 0, end = N - 1, node = 1) {
    const width = 2 ** Math.ceil(Math.log2(N));
    this.tree = new Array(2 * width).fill(0);
    this.start = start;
    this.end = end;
    this.node = node;
    this.val = null;
  }

  initTree(start = this.start, end = this.end, node = this.node) {
    if (start == end) {
      this.tree[node] = Number(inputs[start]);
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
    if (start > right || end < left) return 1_000_000_000;
    if (start >= left && end <= right) return this.tree[node];
    let mid = parseInt((start + end) / 2);
    return Math.min(
      this.getMin(left, right, start, mid, 2 * node),
      this.getMin(left, right, mid + 1, end, 2 * node + 1)
    );
  }
}

const minTree = new MinSegmentTree();
minTree.initTree();

const answer = [];
for (let i = N; i < N + M; i++) {
  const [left, right] = inputs[i].split(" ").map(Number);
  answer.push(minTree.getMin(left - 1, right - 1));
}

console.log(answer.join("\n"));
