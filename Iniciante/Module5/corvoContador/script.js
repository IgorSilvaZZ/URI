const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => item.trim());

const blink = {
  "--*": 1,
  "-*-": 2,
  "-**": 3,
  "*--": 4,
  "*-*": 5,
  "**-": 6,
  "***": 7,
};

let indexLine = 0;

for (let i = 0; i < 3; i++) {
  let some = 0;

  let screamsFlag = 0;

  while (screamsFlag === 0) {
    const currentLine = lines[indexLine];

    if (blink[currentLine]) {
      some += blink[currentLine];
    } else {
      screamsFlag = 1;
    }

    indexLine++;
  }

  console.log(some);
}
