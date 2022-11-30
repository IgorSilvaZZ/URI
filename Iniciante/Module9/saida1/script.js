const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let screen = "";

for (let line = 1; line <= 7; line++) {
  for (let col = 1; col <= 39; col++) {
    if (line === 1 || line == 7) {
      screen += "-";
    } else if (col === 1 || col === 39) {
      screen += "|";
    } else {
      screen += " ";
    }
  }
  screen += "\n";
}

console.log(screen.trim());
