const { readFileSync } = require("fs");

const [number] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => Number(item));

const phrase = "LIFE IS NOT A PROBLEM TO BE SOLVED";
let result = "";

for (let i = 0; i < number; i++) {
  result += phrase[i];
}

console.log(result);
