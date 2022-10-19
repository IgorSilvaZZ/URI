const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n").map(Number);

lines.forEach((number) => {
  if (number >= 1001 && number <= 9999) {
    console.log(number - 1);
  }
});
