const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let countGrenais = 0;
let interVictores = 0;
let gremioVictores = 0;
let empates = 0;
let choice = 0;

function execStats() {
  const [golsInter, golsGremio] = lines.shift().split(" ").map(Number);

  countGrenais++;

  if (golsInter === 0 && golsGremio === 0) {
    empates++;
  } else if (golsInter > golsGremio) {
    interVictores++;
  } else {
    gremioVictores++;
  }

  do {
    console.log("Novo grenal (1-sim 2-nao)");

    choice = Number(lines.shift());

    if (choice === 1) {
      execStats();
    } else if (choice === 2) {
      console.log(`${countGrenais} grenais`);
      console.log(`Inter:${interVictores}`);
      console.log(`Gremio:${gremioVictores}`);
      console.log(`Empates:${empates}`);

      if (interVictores > gremioVictores) {
        console.log("Inter venceu mais");
      } else if (gremioVictores > interVictores) {
        console.log("Gremio venceu mais");
      } else {
        console.log("Nao houve vencedor");
      }
    }
  } while (![1, 2].includes(choice));
}

execStats();
