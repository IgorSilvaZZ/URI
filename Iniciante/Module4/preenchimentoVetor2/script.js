const { readFileSync } = require("fs");

const [number] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseInt(item));

const numbers = [];

let i = 0;
let currentNumber = 0;

while (i < 1000) {
  numbers.push({
    index: i,
    number: currentNumber,
  });

  if (currentNumber == number - 1) {
    currentNumber = 0;
  } else {
    currentNumber++;
  }

  i++;
}

numbers.forEach(({ index, number }) => {
  console.log(`N[${index}] = ${number}`);
});
