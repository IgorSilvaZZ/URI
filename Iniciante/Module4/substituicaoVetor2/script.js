const { readFileSync } = require("fs");

const [number] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseInt(item));

const numbers = [];

numbers[0] = number;

for (let i = 1; i < 10; i++) {
  const lastNumber = numbers[numbers.length - 1];

  let currentNumber = lastNumber * 2;

  numbers.push(currentNumber);
}

numbers.forEach((item, index) => {
  console.log(`N[${index}] = ${item}`);
});
