const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => item.trim());

let [numberLine] = lines;

numberLine = Number(numberLine);

let course = "Ciencia da Computacao";

for (let i = 1; i <= numberLine; i++) {
  if (lines[i] !== "Ciencia da Computacao") {
    continue;
  } else {
    break;
  }
}

console.log(course);
