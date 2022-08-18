const { readFileSync } = require("fs");

const [numberOne, numberTwo] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseInt(item));

let initial = numberTwo < numberOne ? numberTwo : numberOne;
let end = numberOne > numberTwo ? numberOne : numberTwo;

let some = 0;

for (let i = initial; i <= end; i++) {
  if (i % 13 !== 0) {
    some += i;
  }
}

console.log(some);
