const { readFileSync } = require("fs");

const [line] = readFileSync("stdin", "utf-8").split("\n");

const [A, B] = line.split(" ").map(Number);

const hasMultiple = (number1, number2) => {
  return number1 % number2 === 0;
};

if (hasMultiple(A, B) || hasMultiple(B, A)) {
  console.log("Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}
