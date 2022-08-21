const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseInt(item));

let i = 0;

let alcohol = 0;
let gasoline = 0;
let diesel = 0;

while (i < lines.length) {
  const item = lines[i];

  if (item === 1) {
    alcohol++;
  }

  if (item === 2) {
    gasoline++;
  }

  if (item === 3) {
    diesel++;
  }

  if (item === 4) {
    break;
  }

  i++;
}

console.log(`MUITO OBRIGADO`);
console.log(`Alcool: ${alcohol}`);
console.log(`Gasolina: ${gasoline}`);
console.log(`Diesel: ${diesel}`);
