const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => Number(item));

const numbers = [];

for (let i = lines.length - 1; i >= 0; i--) {
  numbers.push(lines[i]);
}

numbers.forEach((number, index) => {
  console.log(`N[${index}] = ${number}`);
});
