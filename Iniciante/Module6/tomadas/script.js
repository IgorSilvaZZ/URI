const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split(" ").map(Number);

const [powerPlugs] = lines;

let some = powerPlugs;

for (let i = 1; i < lines.length; i++) {
  some += lines[i] - 1;
}

console.log(some);
