const { readFileSync } = require("fs");

const [numberSequence] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseInt(item));

let currentLine = 1;

while (currentLine <= numberSequence) {
  let resultFirstSequence = 0;
  let resultSecundSequence = 0;

  let firstSequence = "";
  let secundSequence = "";

  if (currentLine === 1) {
    resultFirstSequence = 1;
    resultSecundSequence = 1;
  } else {
    resultFirstSequence = currentLine * currentLine;
    resultSecundSequence = resultFirstSequence * currentLine;
  }

  firstSequence = `${currentLine} ${resultFirstSequence} ${resultSecundSequence}`;
  secundSequence = `${currentLine} ${resultFirstSequence + 1} ${
    resultSecundSequence + 1
  }`;

  console.log(firstSequence);
  console.log(secundSequence);

  currentLine++;
}
