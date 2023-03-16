const { readFileSync } = require("fs");

const [text] = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => item.trim());

const partsText = text.split(".");

const revertedParts = partsText.reverse();

const [, partTwo] = revertedParts;

let places = partTwo.length;

if (partTwo.length > 5) {
  places = 5;
}

const partsForNumber = Number(revertedParts.join("."));

console.log(partsForNumber.toFixed(places));
