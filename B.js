function solve(input) {
  input = +input;
  let result = [];

  function progession(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }

  function combination(num) {
    return progession(num) / (progession(num - 2) * progession(2));
  }

  function countFights(teams, fights) {
    if (teams === 1) {
      fights = 0;
    }
    if (teams === 2) {
      fights += 1;
    }
    if (teams % 2 !== 0) {
      fights += combination(teams);
    }

    if (teams % 2 === 0 && teams !== 2) {
      fights += teams / 2 + countFights(teams / 2, fights);
    }
    return fights;
  }
  
  for (let i = 1; i < input * 2; i++) {
    if (countFights(i, 0) === input) {
      result.push(i);
    }
  }

  if (result.length >= 1) {
    result = result.join('\n');
  } else if (result.length === 0) {
    result = -1;
  }

  return result;
}

const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8');
console.log(solve(input));
