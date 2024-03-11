const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let quantityBoys = 0;
let quantityGirls = 0;

const numberLines = Number(lines.shift());

for (let line = 0; line < lines.length; line++) {
  const [name, gender] = lines[line].split(" ");

  if (gender === "F") {
    quantityGirls++;
  } else if (gender === "M") {
    quantityBoys++;
  }
}

console.log(`${quantityBoys} carrinhos`);
console.log(`${quantityGirls} bonecas`);
