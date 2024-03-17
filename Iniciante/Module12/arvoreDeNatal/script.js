const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const numberLines = Number(lines.shift());

for (let line = 0; line < numberLines; line++) {
  const [height, diameter, quantity] = lines[line].split(" ").map(Number);

  const verifyHeight = height >= 200 && height <= 300;
  const diameterVerify = diameter >= 50;
  const quantityVerify = quantity >= 150;

  if (verifyHeight && diameterVerify && quantityVerify) {
    console.log("Sim");
  } else {
    console.log("Nao");
  }
}
