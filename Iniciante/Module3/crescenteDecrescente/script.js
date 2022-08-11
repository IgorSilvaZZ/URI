const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => item.split(" "));

for (let i = 0; i < lines.length; i++) {
  const [numberOne, numberTwo] = lines[i].map((item) => parseInt(item));

  if (numberOne === numberTwo) {
    break;
  }

  if (numberOne > numberTwo) {
    console.log("Decrescente");
  } else {
    console.log("Crescente");
  }
}
