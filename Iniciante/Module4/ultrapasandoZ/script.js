const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n").map(Number);

let firstNumber = lines.shift();
let secundNumber = 0;
let some = firstNumber;
let quantity = 0;

do {
  secundNumber = lines.shift();
} while (secundNumber <= firstNumber);

while (some <= secundNumber) {
  some += firstNumber + 1;
  quantity++;
}

console.log(quantity);
