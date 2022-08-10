const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8");

for (let i = 1, j = 60; j >= 0; i += 3, j -= 5) {
  console.log(`I=${i} J=${j}`);
}
