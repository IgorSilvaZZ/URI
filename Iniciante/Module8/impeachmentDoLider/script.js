const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

while (true) {
  const numberPlayers = Number(lines.shift());

  if (lines.length === 0) {
    break;
  }

  const players = lines.shift().split(" ").map(Number);

  let someVotesFavor = 0;
  let partTotalPlayers = (players.length / 3) * 2;

  for (let i = 0; i < numberPlayers; i++) {
    if (players[i] === 1) {
      someVotesFavor++;
    }
  }

  if (someVotesFavor >= partTotalPlayers) {
    console.log("impeachment");
  } else {
    console.log("acusacao arquivada");
  }
}
