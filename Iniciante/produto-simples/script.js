const { readFileSync } = require("fs");

const [A, B] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseInt(item));

const produto = A * B;

console.log(`PROD = ${produto}`);
