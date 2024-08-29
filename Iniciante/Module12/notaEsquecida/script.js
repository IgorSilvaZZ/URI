const { readFileSync } = require("fs");

const [number1, resultAverage] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map(Number);

const QUANTITYNUMBERS = 2;

const resultNumber2 = resultAverage * QUANTITYNUMBERS - number1;

console.log(resultNumber2);
