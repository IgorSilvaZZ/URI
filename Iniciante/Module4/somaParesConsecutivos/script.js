const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => +item);

for (let i = 0; i < lines.length; i++) {
  let currentNumber = lines[i];

  if (currentNumber === 0) {
    break;
  }

  let j = 0;
  let somePars = 0;

  while (j < 5) {
    if (currentNumber % 2 === 0) {
      somePars += currentNumber;
      j++;
    }

    currentNumber++;
  }

  console.log(somePars);
}
