const { readFileSync } = require("fs");

const [number] = readFileSync("stdin", "utf-8").split("\n");

let result = "";

for (let i = number.length - 1; i >= 0; i--) {
  result += number[i];
}

console.log(`${result}`);
