const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const numberLines = Number(lines.shift());

let totalSpending = 0;
let totalBudget = 0;

for (let i = 0; i < numberLines; i++) {
  const [type, value] = lines[i].split(" ");

  const typeFormatted = type.trim();
  const valueToNumber = Number(value);

  // Representa o o gasto da universidade
  if (typeFormatted === "G") {
    totalSpending += valueToNumber;
  } // Representa a verba oferecida pelo governo

  if (typeFormatted === "V") {
    totalBudget += valueToNumber;
  }
}

if (totalSpending > totalBudget) {
  console.log("NAO VAI TER CORTE, VAI TER LUTA!");
} else {
  console.log("A greve vai parar.");
}
