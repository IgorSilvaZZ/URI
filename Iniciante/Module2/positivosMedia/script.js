const { readFileSync } = require("fs");

const line = readFileSync("stdin", "utf-8");

const lines = line.split("\n").map((item) => Number(item));

const numbersPositives = [];

lines.forEach((number) => {
  if (number > 0) {
    numbersPositives.push(number);
  }
});

const total = numbersPositives.reduce(
  (prevent, current) => prevent + current,
  0
);

const average = total / numbersPositives.length;

console.log(`${numbersPositives.length} valores positivos`);
console.log(`${average.toFixed(1)}`);
