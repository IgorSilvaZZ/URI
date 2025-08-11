const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

while (lines.length) {
  if (lines.length === 1) {
    break;
  }

  const quantityAttempts = Number(lines.shift());

  let minValue = Number.MAX_VALUE;

  for (let i = 0; i < quantityAttempts; i++) {
    const currentValueAttempt = Number(lines.shift());

    if (currentValueAttempt < minValue) {
      minValue = currentValueAttempt;
    }
  }

  console.log(minValue);
}
