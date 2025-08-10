const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const legsLanguage = {
  esquerda: "ingles",
  direita: "frances",
  nenhuma: "portugues",
  as_duas: "caiu",
};

while (lines.length) {
  const upLeg = lines.shift().replace(" ", "_");

  if (legsLanguage[upLeg]) {
    console.log(legsLanguage[upLeg]);
  }
}
