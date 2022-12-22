const { readFileSync } = require("fs");

const line = readFileSync("stdin", "utf-8").split(" ").map(Number);

let position = 0;

for (let index in line) {
  if (line[index] === 1) {
    position = Number(index) + 1;
  }
}

console.log(position);
