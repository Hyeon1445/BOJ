const inputs = require('fs').readFileSync('Q14889/input.txt').toString().trim().split('\r\n').splice(1).map(inp => inp.split(' ').map(num => +num))

const teamStartList = []
const temp = []
let min = null
const getTeamStartMember = (count, num) => {
  if(count >= inputs.length / 2) {
    teamStartList.push([...temp])
    return
  }
  for(let i = num + 1; i <= inputs.length; i++) {
    temp.push(i)
    getTeamStartMember(count + 1, i)
    temp.pop()
  }
}
const getTeamAbilityScore = (team) => {
  let score = 0
  for(let i = 0; i < team.length; i++) {
    for(let j = 0; j < team.length; j++) {
      const memberI = team[i]
      const memberJ = team[j]
      score = score + inputs[memberI - 1][memberJ - 1]
    }
  }
  return score
}

getTeamStartMember(0, 0)

teamStartList.forEach(teamStart => {
  const teamLink = Array.from(Array(inputs.length), (_, index) => index + 1).filter((num) => !teamStart.find((member) => member === num))
  const teamLinkScore = getTeamAbilityScore(teamLink)
  const teamStartScore = getTeamAbilityScore(teamStart)
  if(min === null || min > Math.abs(teamLinkScore - teamStartScore)) {
    min = Math.abs(teamLinkScore - teamStartScore)
  }
})

console.log(min)