const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let [numberLines] = lines;

numberLines = Number(numberLines);

const cases = {
  tesoura_papel: "tesoura",
  papel_pedra: "papel",
  pedra_lagarto: "pedra",
  lagarto_Spock: "lagarto",
  Spock_tesoura: "Spock",
  tesoura_lagarto: "tesoura",
  lagarto_papel: "lagarto",
  papel_Spock: "papel",
  Spock_pedra: "Spock",
  pedra_tesoura: "pedra",
};

for (let i = 1; i <= numberLines; i++) {
  const gameCase = lines[i].split(" ").map((item) => item.trim());

  let sheldonVerify = gameCase.join("_");
  let rajVerify = gameCase.reverse().join("_");

  if (cases[sheldonVerify]) {
    console.log(`Caso #${i}: Bazinga!`);
  } else if (cases[rajVerify]) {
    console.log(`Caso #${i}: Raj trapaceou!`);
  } else {
    console.log(`Caso #${i}: De novo!`);
  }
}
