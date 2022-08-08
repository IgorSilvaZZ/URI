const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseInt(item));

const [numberLines] = lines;

let someInInterval = 0;
let someNotInterval = 0;

for (let i = 1; i <= numberLines; i++) {
  const currentValue = lines[i];

  if (currentValue >= 10 && currentValue <= 20) {
    someInInterval++;
  } else {
    someNotInterval++;
  }
}

console.log(`${someInInterval} in`);
console.log(`${someNotInterval} out`);
