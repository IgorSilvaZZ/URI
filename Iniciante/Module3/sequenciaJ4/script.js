const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8");

for (let index = 0; index <= 2; index += 0.2) {
  for (let i = index, j = 1; j <= 3; j++) {
    let newI = i;
    let newJ = j + i;

    // Verificando se o numero tem casa decimal
    if (
      newI * 10 === parseInt(newI) * 10 &&
      newJ * 10 === parseInt(newJ) * 10
    ) {
      console.log(`I=${newI.toFixed(1)} J=${newJ.toFixed(1)}`);
    } else {
      console.log(`I=${newI} J=${newJ}`);
    }
  }
}
