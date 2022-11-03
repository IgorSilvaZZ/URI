const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const numberLines = Number(lines.shift());

while (lines.length > 0) {
  let someNotesCredits = 0;
  let someCredits = 0;

  for (let i = 1; i <= numberLines; i++) {
    const [note, credits] = lines.shift().split(" ").map(Number);

    someNotesCredits += note * credits;
    someCredits += credits;
  }

  const calcCredits = someCredits * 100.0;
  const finalIRA = someNotesCredits / calcCredits;

  console.log(finalIRA.toFixed(4));
}
