const { readFileSync } = require("fs");

const line = readFileSync("stdin", "utf-8");

const lines = line.split("\n").map((item) => Number(item));

const numbersPositives = [];

lines.forEach((number) => {
  if (number > 0) {
    numbersPositives.push(number);
  }
});

console.log(`${numbersPositives.length} valores positivos`);
