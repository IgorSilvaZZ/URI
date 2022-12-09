const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let screen = "";

for (let line = 1; line <= 20; line++) {
  for (let col = 1; col <= 39; col++) {
    if (line === 1 || line === 20 || line == 3) {
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
      } else if (
        col < 4 ||
        col > 36 ||
        (col > 10 && col < 18) ||
        (col > 21 && col < 26)
      ) {
        screen += " ";
      }
    } else {
      if (col === 8) {
        screen += `${line - 4}`;
      } else if (col === 18) {
        screen += `${(line - 4).toString(8)}`;
      } else if (col === 31) {
        screen += `${(line - 4).toString(16).toUpperCase()}`;
      } else if (!(line > 11 && col === 14) && !(line > 13 && col === 2)) {
        screen += " ";
      }
    }
  }

  screen += "\n";
}

console.log(screen.trim());
