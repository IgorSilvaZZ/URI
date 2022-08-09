const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseInt(item));

const maxValue = lines.reduce((prevent, current, index) =>
  current > prevent ? current : prevent
);

const maxValueIndex = lines.findIndex((number) => number === maxValue);

console.log(maxValue);
console.log(maxValueIndex + 1);
