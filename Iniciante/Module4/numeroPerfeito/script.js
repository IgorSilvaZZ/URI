const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseInt(item));

const [numberLines] = lines;

for (let i = 1; i <= numberLines; i++) {
  let currentNumber = lines[i];
  let some = 0;

  for (let j = 1; j < currentNumber; j++) {
    if (currentNumber % j === 0) {
      some += j;
    }
  }

  if (some === currentNumber) {
    console.log(`${currentNumber} eh perfeito`);
  } else {
    console.log(`${currentNumber} nao eh perfeito`);
  }
}
