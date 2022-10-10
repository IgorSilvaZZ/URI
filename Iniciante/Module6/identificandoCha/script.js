const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let [typeTea] = lines;
const typesTea = lines[1].split(" ").map(Number);

typeTea = Number(typeTea);

let somePeoples = 0;

for (let i = 0; i < typesTea.length; i++) {
  const currentTea = typesTea[i];

  if (currentTea === typeTea) {
    somePeoples++;
  }
}

console.log(somePeoples);
