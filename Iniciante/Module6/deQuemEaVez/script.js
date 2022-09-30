const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let [numberLines] = lines;

numberLines = Number(numberLines) * 2;

let indexLine = 1;

while (indexLine <= numberLines) {
  const [namePlayer1, choicePlayer1, namePlayer2, choicePlayer2] = lines[
    indexLine
  ]
    .split(" ")
    .map((item) => item.trim());

  const [numberPlayer1, numberPlayer2] = lines[indexLine + 1]
    .split(" ")
    .map((item) => Number(item));

  const player1 = {
    namePlayer: namePlayer1,
    choicePlayer: choicePlayer1,
  };

  const player2 = {
    namePlayer: namePlayer2,
    choicePlayer: choicePlayer2,
  };

  let some = numberPlayer1 + numberPlayer2;
  let resultChoice = "";

  if (some % 2 === 0) {
    resultChoice = "PAR";
  } else {
    resultChoice = "IMPAR";
  }

  if (player1.choicePlayer === resultChoice) {
    console.log(player1.namePlayer);
  } else if (player2.choicePlayer === resultChoice) {
    console.log(player2.namePlayer);
  }

  indexLine += 2;
}
