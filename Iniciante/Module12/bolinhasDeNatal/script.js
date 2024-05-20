const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n").map(Number);

const [quantityBalls, quantityBranches] = lines;

const totalBalls =
  quantityBranches % 2 !== 0
    ? Math.floor(quantityBranches / 2) // Caso galhos seja impar, menor numero do resultado
    : parseInt(quantityBranches / 2);

const diffBalls = totalBalls - quantityBalls;

if (diffBalls > 0) {
  console.log(`Faltam ${diffBalls} bolinha(s)`);
} else {
  console.log("Amelia tem todas bolinhas!");
}
