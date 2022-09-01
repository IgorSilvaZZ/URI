const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => Number(item));

const numbers = [];

lines.forEach((item, index) => {
  if (item <= 0) {
    numbers.push(1);
  } else {
    numbers.push(item);
  }
});

numbers.forEach((number, i) => {
  console.log(`X[${i}] = ${number}`);
});
