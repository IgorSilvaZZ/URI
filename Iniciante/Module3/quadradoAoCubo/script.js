const { readFileSync } = require("fs");

const [numberLines] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseInt(item));

let lines = [];

for (let i = 1; i <= numberLines; i++) {
  let line = [];

  for (let j = 1; j <= 3; j++) {
    line.push(Math.pow(i, j));
  }

  lines.push(line.join(" "));
}

lines.forEach((item) => {
  console.log(item);
});
