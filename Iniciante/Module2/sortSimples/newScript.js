const { readFileSync } = require("fs");

const [firstLine] = readFileSync("stdin", "utf-8").split("\n");

const numbers = firstLine.split(" ").map(Number);

const originalNumbers = [...numbers];

const orderArray = [];

while (numbers.length > 0) {
  let minValue = numbers[0];
  let minIndex = 0;

  for (let i = 1; i < numbers.length; i++) {
    const currentValue = numbers[i];

    if (currentValue < minValue) {
      minValue = currentValue;
      minIndex = i;
    }
  }

  numbers.splice(minIndex, 1);

  orderArray.push(minValue);
}

console.log(orderArray.join("\n"));
console.log("");
console.log(originalNumbers.join("\n"));
