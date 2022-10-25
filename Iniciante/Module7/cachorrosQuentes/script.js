const { readFileSync } = require("fs");

const [totalDogs, totalPeoples] = readFileSync("stdin", "utf-8")
  .split(" ")
  .map(Number);

const arrange = Math.abs(totalDogs / totalPeoples).toFixed(2);

console.log(arrange);
