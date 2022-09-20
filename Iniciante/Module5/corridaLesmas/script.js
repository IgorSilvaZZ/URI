const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let indexLine = 0;

while (indexLine < lines.length) {
  if (indexLine % 2 == 1) {
    let preventLine = Number(lines[indexLine - 1]);

    let numbers = lines[indexLine].split(" ").map((item) => Number(item));
    let maxValue = numbers[0];

    for (let indexNumbers = 0; indexNumbers < preventLine; indexNumbers++) {
      let currentNumber = numbers[indexNumbers];

      if (currentNumber > maxValue) {
        maxValue = currentNumber;
      }
    }

    if (maxValue < 10) {
      console.log(1);
    } else if (maxValue < 20) {
      console.log(2);
    } else {
      console.log(3);
    }
  }

  indexLine++;
}
