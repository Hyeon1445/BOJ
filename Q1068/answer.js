const [[N], parents, [target]] = require('fs').readFileSync('Q1068/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))

let rootNode = null

const graph = new Map()
for(let node = 0; node < N; node++) {
  graph.set(node, [])
}

for(let i = 0; i < parents.length; i++) {
  const child = i
  const parent = parents[i]
  if(parent === -1) {
    rootNode = child
  } else if(child !== target) {
    graph.get(parent).push(child)
  }
}


const bfs = (root) => {
  const queue = [root]
  let qStart = 0
  let leafCount = 0
  while(qStart !== queue.length) {
    const node = queue[qStart]
    qStart++
    const children = graph.get(node)
    if(node === target) {
      continue
    }
    if(children.length === 0) {
      leafCount++
    }
    for(let i = 0; i < children.length; i++) {
      queue.push(children[i])
    }
  }
  return leafCount
}

console.log(bfs(rootNode))