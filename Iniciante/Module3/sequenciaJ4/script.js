const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8");

for (let index = 0; index <= 2; index += 0.2) {
  for (let i = index, j = 1; j <= 3; j++) {
    let newI = i;
    let newJ = j + i;

    console.log(`I=${newI} J=${newJ}`);
  }
}
