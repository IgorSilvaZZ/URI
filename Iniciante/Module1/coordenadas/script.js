const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8");

const [x, y] = lines.split(" ").map((item) => parseFloat(item));

if (x === 0.0 && y === 0.0) {
  console.log(`Origem`);
} else if (x === 0.0) {
  console.log(`Eixo Y`);
} else if (y === 0.0) {
  console.log(`Eixo X`);
} else if (x > 0.0 && y > 0.0) {
  console.log(`Q1`);
} else if (x < 0.0 && y > 0.0) {
  console.log(`Q2`);
} else if (x < 0.0 && y < 0.0) {
  console.log(`Q3`);
} else if (x > 0.0 && y < 0.0) {
  console.log(`Q4`);
}
