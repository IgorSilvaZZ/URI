const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let indexNote = 0;

while (true) {
  const [total, value] = lines[indexNote].split(" ").map(Number);

  const grades = [2, 5, 10, 20, 50, 100];

  let possible = false;

  if (total === 0 && value === 0) {
    break;
  }

  const diff = value - total;

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (diff - grades[j] === grades[i]) {
        possible = true;
      }
    }
  }

  if (possible) {
    console.log("possible");
  } else {
    console.log("impossible");
  }

  indexNote++;
}
