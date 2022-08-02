const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8");

const line = lines.split("\n").map((item) => parseInt(item));

let pairs = 0;

line.forEach((number) => {
  if (number % 2 === 0) {
    pairs++;
  }
});

console.log(`${pairs} valores pares`);
