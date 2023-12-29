const { readFileSync } = require("fs");

const [numberOne, numberTwo] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseInt(item));

let initial = numberTwo < numberOne ? numberTwo : numberOne;
let end = numberOne > numberTwo ? numberOne : numberTwo;

for (let i = initial + 1; i < end; i++) {
  if (i % 5 === 2 || i % 5 === 3) {
    console.log(i);
  }
}
