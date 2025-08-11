const { readFileSync } = require("fs");

const [firstLine] = readFileSync("stdin", "utf-8").split("\n");

const [distance, diameterSauron, diameterSaruman] = firstLine
  .split(" ")
  .map(Number);

const someDistance = diameterSauron + diameterSaruman;

const result = distance / someDistance;

console.log(result.toFixed(2));
