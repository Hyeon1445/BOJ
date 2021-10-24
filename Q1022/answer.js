var fs = require('fs');
const { stdout } = require('process');
// const inp = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
const inp = require('fs').readFileSync('Q1022/input.txt').toString().trim().split(' ')
const r1 = parseInt(inp[0]);
const c1 = parseInt(inp[1]);
const r2 = parseInt(inp[2]);
const c2 = parseInt(inp[3]);

const val = (x, y) => {
  if(x === 0 && y === 0){ return 1 }
  lap = Math.max(Math.abs(x), Math.abs(y))
  if(y === lap) { return (2 * lap + 1)**2 - (lap - x) }
  else if(x === -lap) { return (2 * lap + 1)**2 - (2 * lap) - (lap - y)}
  else if(y === -lap) { return (2 * lap + 1)**2 - 2* (2 * lap) - (lap + x)}
  else { return (2 * lap + 1)**2 - 3 * (2 * lap) - (lap + y)}
}

const maxLen = Math.max(String(val(c1, r1)).length, String(val(c2, r2)).length)

for(let i = r1; i <= r2; i++) {
  for(let j = c1; j <=c2; j++) {
    process.stdout.write(String(val(j, i)).padStart(maxLen) + ' ')
  }
  console.log()
}