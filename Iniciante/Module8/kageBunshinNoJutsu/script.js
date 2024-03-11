const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

while (lines.length !== 0) {
  const number = Number(lines.shift());

  if (number) {
    let quantityClones = 0;
    let clonesGenerated = 0;
    let clonesAllGenerated = false;
    let totalClones = 0;
    let i = 1;

    if (number === 1) {
      quantityClones = 0;
    } else {
      console.log(quantityClones);
    }

    // console.log(quantityClones);
  }
}
