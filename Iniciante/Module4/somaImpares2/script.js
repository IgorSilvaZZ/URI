const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [numberLines] = lines;

for (let i = 1; i <= Number(numberLines); i++) {
  let [numberOne, numberTwo] = lines[i]
    .split(" ")
    .map((item) => parseInt(item));

  let some = 0;

  let j = 1;

  while (j <= numberTwo) {
    if (numberOne % 2 !== 0) {
      some += numberOne;

      j++;
    }

    numberOne++;
  }

  console.log(some);
}
