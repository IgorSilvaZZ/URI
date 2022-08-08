const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8");

const [numberOne, numberTwo] = lines.split("\n").map((item) => parseInt(item));

let soma = 0;

if (numberOne < numberTwo) {
  for (let i = numberOne + 1; i < numberTwo; i++) {
    if (i % 2 !== 0) {
      soma += i;
    }
  }
} else {
  for (let i = numberTwo + 1; i < numberOne; i++) {
    if (i % 2 !== 0) {
      soma += i;
    }
  }
}

console.log(soma);
