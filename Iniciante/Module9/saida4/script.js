const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let screen = "";

for (let line = 1; line <= 7; line++) {
  for (let col = 1; col <= 39; col++) {
    if (line === 1 || line === 7) {
      screen += "-";
    } else if (col === 1 || col === 13 || col === 23 || col === 39) {
      screen += "|";
    } else if (line === 2) {
      if (col === 4) {
        screen += "decimal";
      } else if (col === 16) {
        screen += "octal";
      } else if (col === 26) {
        screen += "Hexadecimal";
      } else if (col < 4 || col > 20) {
        screen += " ";
      }
    } else {
      screen += " ";
    }
  }

  screen += "\n";
}

console.log(screen.trim());
