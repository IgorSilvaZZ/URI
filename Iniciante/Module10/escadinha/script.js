const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const numberSequences = Number(lines.shift());

const sequences = lines.shift().split(" ").map(Number);

let firstDifference;
let quantitySequences = 0;

for (let i = 0; i < numberSequences - 1; i++) {
  if (numberSequences >= 2) {
    const currentNumber = sequences[i];
    const nextNumber = sequences[i + 1];

    let currentDifference = 0;

    if (i === 0) {
      firstDifference = nextNumber - currentNumber;
    } else {
      currentDifference = nextNumber - currentNumber;
    }

    if (firstDifference !== currentDifference) {
      firstDifference == currentDifference;
      quantitySequences++;
    }
  } else {
    quantitySequences = 1;
  }
}

console.log(quantitySequences);
