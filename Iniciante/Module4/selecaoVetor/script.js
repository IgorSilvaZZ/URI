const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => +item);

const numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(lines[i]);
}

for (let i = 0; i < 100; i++) {
  if (numbers[i] <= 10) {
    console.log(`A[${i}] = ${numbers[i].toFixed(1)}`);
  }
}
