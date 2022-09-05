const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => Number(item));

const [numberLines] = lines;

const numbers = [];

for (let i = 1; i <= numberLines; i++) {
  const currentNumber = lines[i];

  let previous = 0;
  let current = 1;
  let next = 0;

  for (let j = 1; j <= currentNumber; j++) {
    next = previous + current;
    previous = current;
    current = next;
  }

  numbers.push({
    number: currentNumber,
    fib: previous,
  });
}

numbers.forEach(({ number, fib }) => {
  console.log(`Fib(${number}) = ${fib}`);
});
