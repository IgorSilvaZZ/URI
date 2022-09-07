const { readFileSync } = require("fs");

const [numberLine] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => Number(item));

const numbers = [];

let number = numberLine;

let i = 0;

while (i < 100) {
  numbers.push(number.toFixed(4));
  number /= 2;

  i++;
}

numbers.forEach((num, index) => {
  console.log(`N[${index}] = ${num}`);
});
