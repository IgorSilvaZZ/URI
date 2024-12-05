const { readFileSync } = require("fs");

const [firstLine] = readFileSync("stdin", "utf-8").split("\n");

/* Voltas e Placas */
const [quantityLaps, quantityPlates] = firstLine.split(" ").map(Number);

const totalPlates = quantityPlates * quantityLaps;

let finalMessage = "";

for (let i = 1; i <= 9; i++) {
  const currentPercent = i / 10;

  const numberPlates = currentPercent * totalPlates;

  const result = Math.ceil(numberPlates);

  finalMessage += result + " ";
}

console.log(finalMessage.trim());
