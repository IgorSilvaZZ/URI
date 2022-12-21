const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n").map(Number);

const totalFigures = lines.shift();

const numberBuyFigures = lines.shift();

const acceptsFigures = [];

for (let i = 1; i <= numberBuyFigures; i++) {
  const currentLine = lines.shift();

  if (!acceptsFigures.includes(currentLine)) {
    acceptsFigures.push(currentLine);
  }
}

console.log(totalFigures - acceptsFigures.length);
