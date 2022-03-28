const { readFileSync } = require("fs");

const line = readFileSync("stdin", "utf-8");

const [a, b, c] = line.split(" ").map((item) => parseFloat(item));

const delta = Math.pow(b, 2) - 4 * a * c;

const x1 = (-b + Math.sqrt(delta)) / (2 * a);
const x2 = (-b - Math.sqrt(delta)) / (2 * a);

if (delta < 0 || delta === 0 || isNaN(x1) || isNaN(x2)) {
  console.log("Impossivel calcular");
} else {
  console.log(`R1 = ${x1.toFixed(5)}`);
  console.log(`R2 = ${x2.toFixed(5)}`);
}
