const { readFileSync } = require("fs");

const line = readFileSync("stdin", "utf-8");

const [A, B, C] = line.split(" ").map((item) => parseFloat(item));

if (A < B + C && B < A + C && C < B + A) {
  const perimetro = A + B + C;
  console.log(`Perimetro = ${perimetro.toFixed(2)}`);
} else {
  const area = ((A + B) * C) / 2;
  console.log(`Area = ${area.toFixed(2)}`);
}
