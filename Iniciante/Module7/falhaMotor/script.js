const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [numberCases] = lines.map(Number);

const cases = lines[1].split(" ").map(Number);

let positionFall = 0;

for (let i = 0; i < numberCases - 1; i++) {
  const currentValue = cases[i];

  const nextValue = cases[i + 1];

  if (currentValue > nextValue) {
    positionFall = i + 2;
    break;
  }
}

console.log(positionFall);
