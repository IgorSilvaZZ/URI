const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseFloat(item));

let notes = [];

for (let i = 0; i < lines.length; i++) {
  if (lines[i] < 0 || lines[i] > 10) {
    console.log("nota invalida");
  } else {
    notes.push(lines[i]);
  }

  if (notes.length === 2) {
    break;
  }
}

const some = notes.reduce((total, current) => {
  return (total += current);
}, 0);

const result = some / 2;

console.log(`media = ${result.toFixed(2)}`);
