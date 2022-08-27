const { readFileSync } = require("fs");

const line = readFileSync("stdin", "utf-8")
  .split(" ")
  .map((item) => Number(item));

let i = 0;
let some = 0;

let numbers = [];

while (i <= line.length) {
  if (line[i] <= 0) {
    i++;
    continue;
  }

  if (numbers.length === 2) {
    break;
  }

  numbers.push(line[i]);

  i++;
}

let [numberOne, numberTwo] = numbers;

for (let j = 1; j <= numberTwo; j++) {
  some += numberOne;

  numberOne++;
}

console.log(some);
