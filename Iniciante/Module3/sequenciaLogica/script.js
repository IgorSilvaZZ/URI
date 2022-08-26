const { readFileSync } = require("fs");

const [numberLines] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseInt(item));

let lines = [];

let i = 1;
let count = 0;

while (i <= numberLines * 2) {
  let line = [];

  let currentNumber = parseInt(Math.round(i / 2));

  for (let j = 1; j <= 3; j++) {
    /* line.push(Math.pow(currentNumber, j) + count); */
  }

  /* lines.push(line.join(" ")); */

  i++;
  count++;
  count = count >= 2 ? 0 : count;
}

/* lines.forEach((item) => {
  console.log(item);
}); */
