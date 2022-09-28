const { readFileSync } = require("fs");

const [number, cases] = readFileSync("stdin", "utf-8").split("\n");

const numbers = cases.split(" ").map(Number);

let indexMin = 0;
let minNumber = 0;

for (let i = 1; i <= Number(number); i++) {
  let currentNumber = numbers[i - 1];

  if (i === 1) {
    minNumber = currentNumber;
    indexMin = 1;
  } else if (currentNumber < minNumber) {
    minNumber = currentNumber;
    indexMin = i;
  }
}

console.log(indexMin);
