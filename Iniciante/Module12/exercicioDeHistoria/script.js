const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

while (lines.length) {
  const number = Number(lines.shift());

  if (number > 0) {
    console.log(Math.ceil(number / 100.0));
  }
}
