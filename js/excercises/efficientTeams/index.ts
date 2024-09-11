/**
 * A coding competition is being organized. The participants need to be grouped into teams where each team has exactly two candidates. There are n candidates, where each canidate has a skill denoted by skill[i]. A total of (n/2) teams are to be formed, such that the total skill of each team is the same. For Example if skill = [1,2,3,2] then they can pair as [[1,3],[2,2]] because the total skill of each team is same ie 4.
 * The efficiency of a team is defined as the product of the skill levels of its 2 members, ie for the skills [1,3] the efficiency of the team is 1* 3 = 3. Find the total sum of efficiencies of all teams that can be formed satisfying the criterion above. if there is no way to team them to satisfy condition return -1.
 *  */

function createEfficientTeams(skills: number[]) {
  let n = skills.length;
  if (n < 2) return -1;
  if (n % 2 !== 0) return -1;

  let minSkill = skills[0];
  let maxSkill = skills[0];

  for (let i = 0; i < n; i++) {
    let v = skills[i];

    if (v < minSkill) {
      minSkill = v;
    }
    if (v > maxSkill) {
      maxSkill = v;
    }
  }
  let avgSkill = minSkill + maxSkill;

  let teams = [];

  for (let i = 0; i < skills.length; i++) {
    let v = skills[i];
    if (v === null) continue;

    let diff = Math.abs(avgSkill - v);
    let indexOfRequiredSkill = skills.indexOf(diff);

    if (indexOfRequiredSkill !== -1 && indexOfRequiredSkill !== i) {
      teams.push(new Array(skills[i], skills[indexOfRequiredSkill]));
      // @ts-ignore
      skills[indexOfRequiredSkill] = null;
      // @ts-ignore
      skills[i] = null;
    }
  }

  let efficiency = teams.reduce((acc, curr) => {
    return (acc += curr[0] * curr[1]);
  }, 0);
  if (efficiency === 0) return -1;
  return efficiency;
}

module.exports = [createEfficientTeams];
