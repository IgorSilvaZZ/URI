const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8");

for (let index = 1; index <= 9; index += 2) {
  for (let i = index, j = 7; j >= 5; j -= 1) {
    console.log(`I=${i} J=${j}`);
  }
}
