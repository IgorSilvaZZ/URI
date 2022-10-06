const { readFileSync } = require("fs");

const [preventValue, newValue] = readFileSync("stdin", "utf-8")
  .split(" ")
  .map(parseFloat);

const percent = ((newValue - preventValue) / preventValue) * 100;

console.log(`${percent.toFixed(2)}%`);
