const { readFileSync } = require("fs");

const [distance] = readFileSync("stdin", "utf-8").split("\n").map(Number);

let points = 0;

if (distance <= 800) {
  points = 1;
} else if (distance > 800 && distance <= 1400) {
  points = 2;
} else if ((distance > 1400) & (distance <= 2000)) {
  points = 3;
}

console.log(points);
