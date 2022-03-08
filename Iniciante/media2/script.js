const { readFileSync } = require("fs");

const [A, B, C] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseFloat(item));

const nota1 = A * 2;
const nota2 = B * 3;
const nota3 = C * 5;

const media = (nota1 + nota2 + nota3) / 10;

console.log(`MEDIA = ${media.toFixed(1)}`);
