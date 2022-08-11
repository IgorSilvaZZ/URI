const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8");

for (let index = 1, sequence = 7; index <= 9; index += 2, sequence += 2) {
  for (let i = index, j = sequence; j >= sequence - 2; j--) {
    console.log(`I=${i} J=${j}`);
  }
}
