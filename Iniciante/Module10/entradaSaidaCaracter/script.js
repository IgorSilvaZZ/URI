const { readFileSync } = require("fs");

const [value1, value2, value3] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => item.trim());

let screen = "";

for (let line = 1; line <= 3; line++) {
  for (let col = 1; col <= 3; col++) {
    if (col === 1) {
      if (line == 1) {
        screen += `A = ${value1}, `;
      } else if (line === 2) {
        screen += `A = ${value2}, `;
      } else {
        screen += `A = ${value3}, `;
      }
    } else if (col === 2) {
      if (line == 1) {
        screen += `B = ${value2}, `;
      } else if (line === 2) {
        screen += `B = ${value3}, `;
      } else {
        screen += `B = ${value1}, `;
      }
    } else if (col === 3) {
      if (line == 1) {
        screen += `C = ${value3}`;
      } else if (line === 2) {
        screen += `C = ${value1}`;
      } else {
        screen += `C = ${value2}`;
      }
    }
  }

  screen += "\n";
}

console.log(screen.trim());
