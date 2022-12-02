const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let screen = "";

for (let line = 1; line <= 7; line++) {
  for (let col = 1; col <= 39; col++) {
    if (line === 1 || line === 7) {
      screen += "-";
    } else if (col === 1 || col === 39) {
      screen += "|";
    } else if (line === 2) {
      if (col === 2) {
        screen += "x = 35";
      } else if (col < 2 || col > 7) {
        screen += " ";
      }
    } else if (line === 4) {
      if (col === 17) {
        screen += "x = 35";
      } else if (col < 17 || col > 22) {
        screen += " ";
      }
    } else if (line === 6) {
      if (col === 33) {
        screen += "x = 35";
      } else if (col < 33) {
        screen += " ";
      }
    } else {
      screen += " ";
    }
  }

  screen += "\n";
}

console.log(screen.trim());
