const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

for (let i = 0; i < lines.length; i++) {
  if (i === 2 || i === 6 || i === 8) {
    console.log(lines[i]);
  }
}
