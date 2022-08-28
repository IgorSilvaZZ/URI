const { readFileSync } = require("fs");

const [number] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseInt(item));

let anterior = 0;
let atual = 1;
let proximo = 0;
let line = [];

for (let i = 1; i <= number; i++) {
  line.push(anterior);

  proximo = anterior + atual;
  anterior = atual;
  atual = proximo;
}

console.log(line.join(" "));
