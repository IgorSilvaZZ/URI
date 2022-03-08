const { readFileSync } = require("fs");

const [raio] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseFloat(item));

const n = 3.14159;

const area = n * raio ** 2;

console.log(`A=${area.toFixed(4)}`);
