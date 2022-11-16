const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

while (true) {
  const numberLines = Number(lines.shift().trim());

  if (lines.length === 0) {
    break;
  }

  let someNotesCredits = 0;
  let someCredits = 0;

  for (let i = 0; i < numberLines; i++) {
    let [note, credits] = lines
      .shift()
      .split(" ")
      .map((item) => item.trim());

    if (note !== "" && credits !== "") {
      note = Number(note);
      credits = Number(credits);

      someNotesCredits += note * credits;
      someCredits += credits;
    }
  }

  const calcCredits = someCredits * 100.0;
  const finalIRA = someNotesCredits / calcCredits;

  console.log(finalIRA.toFixed(4));
}
