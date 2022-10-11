const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let [numberCases] = lines;

numberCases = Number(numberCases);

let indexLine = 1;

while (indexLine <= numberCases * 2) {
  const playerOne = lines[indexLine].trim();
  const playerTwo = lines[indexLine + 1].trim();

  if (
    playerOne === "ataque" &&
    (playerTwo === "pedra" || playerTwo == "papel")
  ) {
    console.log("Jogador 1 venceu");
  } else if (playerOne === "pedra" && playerTwo === "papel") {
    console.log("Jogador 1 venceu");
  } else if (playerOne === "ataque" && playerTwo === "ataque") {
    console.log("Aniquilacao mutua");
  } else if (playerOne === "pedra" && playerTwo === "pedra") {
    console.log("Sem ganhador");
  } else if (playerOne === "papel" && playerTwo === "papel") {
    console.log("Ambos venceram");
  } else {
    console.log("Jogador 2 venceu");
  }

  indexLine += 2;
}
