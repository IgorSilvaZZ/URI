const { readFileSync } = require("fs");

const [choice, playerOne, playerTwo, theftPlayerOne, indictmentPlayerOne] =
  readFileSync("stdin", "utf-8").split(" ").map(Number);

// se choice = 1 então o jogador 1 escolheu par, se p = 0 então o jogador 1 escolheu ímpar
const choiceIsPar = choice === 1;

// Os valores playerOne, playerTwo, representam respectivamente o número escolhido pelo jogador 1 e pelo jogador 2

//  theftPlayerOne representa se o jogador 1 roubou (se theftPlayerOne = 1 então o jogador 1 roubou, se theftPlayerOne = 0 então o jogador 1 não roubou
const isTheftPlayerOne = theftPlayerOne === 1;

//  indictmentPlayerOne representa se o jogador 2 acusou o roubo (se indictmentPlayerOne = 1 então o jogador 2 acusou o jogador 1 de roubo, se indictmentPlayerOne = 0 então ele não acusou o jogador 1 de roubo
const isAccusedPlayerOne = indictmentPlayerOne == 1;

const someChoicePlayers = playerOne + playerTwo;

const someIsPar = someChoicePlayers % 2 === 0;

if (isTheftPlayerOne && isAccusedPlayerOne) {
  console.log("Jogador 2 ganha!");
} else if (isTheftPlayerOne && !isAccusedPlayerOne) {
  console.log("Jogador 1 ganha!");
} else if (!isTheftPlayerOne && isAccusedPlayerOne) {
  console.log("Jogador 1 ganha!");
} else if (someIsPar && choiceIsPar) {
  console.log("Jogador 1 ganha!");
} else if (!someIsPar && !choiceIsPar) {
  console.log("Jogador 1 ganha!");
} else {
  console.log("Jogador 2 ganha!");
}
