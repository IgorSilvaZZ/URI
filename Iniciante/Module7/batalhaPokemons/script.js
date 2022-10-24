const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const numberInstances = Number(lines.shift());

let i = 0;

while (i < numberInstances) {
  const valueBonus = Number(lines.shift());

  //Dabriel
  const [attackPokemonP1, defensePokemonP1, levelCoachP1] = lines
    .shift()
    .split(" ")
    .map(Number);

  //Guarte
  const [attackPokemonP2, defensePokemonP2, levelCoachP2] = lines
    .shift()
    .split(" ")
    .map(Number);

  let attackFinalP1 = (attackPokemonP1 + defensePokemonP1) / 2;
  let attackFinalP2 = (attackPokemonP2 + defensePokemonP2) / 2;

  if (levelCoachP1 % 2 === 0) {
    attackFinalP1 += valueBonus;
  }

  if (levelCoachP2 % 2 === 0) {
    attackFinalP2 += valueBonus;
  }

  if (attackFinalP1 > attackFinalP2) {
    console.log("Dabriel");
  } else if (attackFinalP2 > attackFinalP1) {
    console.log("Guarte");
  } else {
    console.log("Empate");
  }

  i++;
}
