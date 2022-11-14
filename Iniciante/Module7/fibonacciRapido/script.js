const { readFileSync } = require("fs");

const [number] = readFileSync("stdin", "utf-8").split("\n").map(Number);

const resultOne = (1 + Math.sqrt(5)) / 2;

const resultPotency = Math.pow(resultOne, number);

const resultTwo = (1 - Math.sqrt(5)) / 2;

const resultTwoPotency = Math.pow(resultTwo, number);

const fibonacci = (resultPotency - resultTwoPotency) / Math.sqrt(5);

console.log(fibonacci.toFixed(1));
