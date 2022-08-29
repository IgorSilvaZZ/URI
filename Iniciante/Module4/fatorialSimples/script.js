const { readFileSync } = require("fs");

const [number] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseInt(item));

let result = 1;

for (let i = number; i > 0; i--) {
  result *= i;
}

console.log(result);
