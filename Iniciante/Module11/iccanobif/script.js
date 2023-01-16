const { readFileSync } = require("fs");

const [number] = readFileSync("stdin", "utf-8").split("\n").map(Number);

let previous = 0;
let current = 1;
let next = 0;
let line = [];

for (let i = 1; i <= number; i++) {
  line.push(current);

  next = previous + current;
  previous = current;
  current = next;
}

const lineShow = line.reverse();

console.log(...lineShow);
