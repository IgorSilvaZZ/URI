const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [number, values] = lines;

const numbers = values.split(" ").map((item) => Number(item));

let min = numbers[0];
let index = 0;

for (let i = 0; i < number; i++) {
  const currentNumber = numbers[i];

  if (currentNumber < min) {
    min = currentNumber;
    index = i;
  }
}

console.log(`Menor valor: ${min}`);
console.log(`Posicao: ${index}`);
