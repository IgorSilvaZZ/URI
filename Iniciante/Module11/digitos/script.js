const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const numberLines = Number(lines.shift());

for (let i = 0; i < numberLines; i++) {
  const [base, expo] = lines[i].split(" ").map(Number);

  const potency = Math.pow(base, expo);

  // Usando o logaritmo na base 10, podemos ter uma estimativa de quantos digitos há em um número
  // Math.log10(1) => 0
  // Math.log10(20) => 1

  const result = Math.floor(Math.log10(potency) + 1);

  console.log(result);
}
