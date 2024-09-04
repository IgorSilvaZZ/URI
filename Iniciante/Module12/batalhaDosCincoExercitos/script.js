const { readFileSync } = require("fs");

const [currentLine] = readFileSync("stdin", "utf-8").split("\n");

const [
  totalHumans,
  totalElves,
  totalDwarves,
  totalOrcs,
  totalWargs,
  totalEagles,
] = currentLine.split(" ").map(Number);

let totalSideOfGood = totalHumans + totalElves + totalDwarves;
const totalSideOfEvil = totalOrcs + totalWargs;

if (totalSideOfGood <= totalSideOfEvil) {
  totalSideOfGood += totalEagles;
}

if (totalSideOfGood > totalSideOfEvil) {
  console.log("Middle-earth is safe.");
  return;
}

console.log("Sauron has returned.");
