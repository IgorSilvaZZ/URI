const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => item.trim());

const totalNumbers = Number(lines.shift());

const numbers = lines
  .shift()
  .split(" ")
  .map((item) => item.trim());

let i = 0;

while (i < totalNumbers) {
  const currentNumber = Number(numbers[i - 1]);
  const nextNumber = Number(numbers[i]);

  i++;
}

/* for (let i = 0; i < totalNumbers; i++) {
  const currentNumber = Number(numbers[i - 1]);
  const nextNumber = Number(numbers[i]);

    
  let diferrence = currentNumber - nextNumber;

} */
