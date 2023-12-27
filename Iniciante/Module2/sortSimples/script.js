const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [line] = lines;

const [number1, number2, number3] = line.split(" ").map(Number);

// Esta solução é a solução para treinar estrutura de dados, já que com esse exercicio daria para ser resolvido com sort

let numberMax = Number.MAX_VALUE;
let numberMin = Number.MIN_VALUE;

if (number1 > number2 && number1 > number3) {
  numberMax = number1;
} else if (number2 > number1 && number2 > number3) {
  numberMax = number2;
} else {
  numberMax = number3;
}

if (number1 < number2 && number1 < number3) {
  numberMin = number1;
} else if (number2 < number1 && number2 < number3) {
  numberMin = number2;
} else {
  numberMin = number3;
}

const readingOrder = [number1, number2, number3];

const mediumNumber = readingOrder.find(
  (number) => number !== numberMax && number !== numberMin
);

const ascendingOrder = [numberMin, mediumNumber, numberMax];

console.log(ascendingOrder.join("\n"));
console.log("");
console.log(readingOrder.join("\n"));
