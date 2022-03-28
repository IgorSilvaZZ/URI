const { readFileSync } = require("fs");

const [A, B, C, D] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseInt(item));

const diferenca = A * B - C * D;

console.log(`DIFERENCA = ${diferenca}`);
