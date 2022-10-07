const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let [terms] = lines;
const valuesOriginal = lines[1].split(" ").map(Number);
const values = valuesOriginal;

terms = Number(terms);

let startsAttack = 0;
let i = 0;
let some = 0;

for (let j = 0; j < terms; j++) {
  some += values[j];
}

while (i < terms) {
  const currentValue = values[i];

  if (!currentValue) {
    some = some - startsAttack;
    startsAttack++;
    break;
  }

  if (currentValue % 2 !== 0) {
    values[i] = values[i] - 1;
    startsAttack++;
    i++;
  } else {
    i--;
  }
}

console.log(`${startsAttack} ${some}`);
