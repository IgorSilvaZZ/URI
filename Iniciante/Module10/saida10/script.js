const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let screen = "";

/* for (let line = 1; line <= 9; line++) {
  for (let col = 1; col <= 12; col++) {
    if (line === 1 || line === 9) {
      if (col === 8) {
        screen += "A";
      }
    } else if (line === 2 || line === 8) {
      if (col === 7 || col === 9) {
        screen += "B";
      }
    } else if (line === 3 || line === 7) {
      if (col === 6 || col === 10) {
        screen += "C";
      }
    } else if (line === 4 || line === 6) {
      if (col === 5 || col === 11) {
        screen += "D";
      }
    } else if (line === 5) {
      if (col === 4 || col === 12) {
        screen += "E";
      }
    }

    screen += " ";
  }

  screen += "\n";
} */
console.log("       A");
console.log("      B B");
console.log("     C   C");
console.log("    D     D");
console.log("   E       E");
console.log("    D     D");
console.log("     C   C");
console.log("      B B");
console.log("       A");
