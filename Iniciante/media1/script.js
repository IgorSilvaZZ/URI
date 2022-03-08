const { readFileSync } = require("fs");

const [A, B] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseFloat(item));

const nota1 = A * 3.5;

const nota2 = B * 7.5;

const media = (nota1 + nota2) / 11;

console.log(`MEDIA = ${media.toFixed(5)}`);
