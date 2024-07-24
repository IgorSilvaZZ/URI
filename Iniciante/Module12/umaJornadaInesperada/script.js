const { readFileSync } = require("fs");

const [line] = readFileSync("stdin", "utf-8").split("\n");

const [totalParticipants, distance] = line.split(" ").map(Number);

const realTotalParticipants = totalParticipants + 2;

const totalDays = distance / realTotalParticipants;

console.log(totalDays.toFixed(2));
