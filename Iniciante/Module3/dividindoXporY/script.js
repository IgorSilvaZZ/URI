const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [numberLines] = lines;

for (let i = 1; i <= Number(numberLines); i++) {
  const [numberOne, numberTwo] = lines[i]
    .split(" ")
    .map((item) => parseInt(item));

  const division = numberOne / numberTwo;

  if (
    division === Number.POSITIVE_INFINITY ||
    division === Number.NEGATIVE_INFINITY
  ) {
    console.log("divisao impossivel");
  } else {
    console.log(division.toFixed(1));
  }
}
