const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const totalLines = Number(lines.shift());

const totalVotesCarlos = Number(lines.shift());

let isCarlosWinner = true;

for (let i = 0; i < totalLines - 1; i++) {
  const numberVotes = Number(lines[i]);

  if (numberVotes > totalVotesCarlos) {
    isCarlosWinner = false;
  }
}

console.log(isCarlosWinner ? "S" : "N");
