const { readFileSync } = require("fs");

const [numberLines, totalNumber] = readFileSync("stdin", "utf-8")
  .split(" ")
  .map((item) => parseInt(item));

let lines = [];

let i = 1;

while (i <= totalNumber) {
  let line = [];

  for (let j = 1; j <= numberLines; j++) {
    line.push(i);
    i++;
  }

  lines.push(line.join(" "));
}

lines.forEach((item) => {
  console.log(item);
});
