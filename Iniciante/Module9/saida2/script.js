const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let screen = "";

for (let i = 1; i <= 7; i++) {
  for (let j = 1; j <= 39; j++) {
    if (i === 1 || i === 7) {
      screen += "-";
    } else if (j === 1 || j === 39) {
      screen += "|";
    } else if (i === 2) {
      if (j === 10) {
        screen += "Roberto";
      } else if (j < 10 || j > 16) {
        screen += " ";
      }
    } else if (i === 4) {
      if (j === 10) {
        screen += "5786";
      } else if (j < 10 || j > 13) {
        screen += " ";
      }
    } else if (i === 6) {
      if (j === 10) {
        screen += "UNIFEI";
      } else if (j < 10 || j > 15) {
        screen += " ";
      }
    } else {
      screen += " ";
    }
  }
  screen += "\n";
}

console.log(screen.trim());
