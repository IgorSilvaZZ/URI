const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [numberLine] = lines;

for (let i = 1; i <= Number(numberLine); i++) {
  const number = Number(lines[i]);

  let some = 0;

  for (let j = 1; j <= number; j++) {
    if (j % 2 === 1) {
      some += 1;
    } else {
      some -= 1;
    }
  }

  console.log(some);
}
