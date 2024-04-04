const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n").map(Number);

const ageMonica = Number(lines.shift());
const ageSonOne = Number(lines.shift());
const ageSonTwo = Number(lines.shift());

if (ageMonica >= 40 && ageMonica <= 110) {
  if (
    ageSonOne >= 1 &&
    ageSonOne < ageMonica &&
    ageSonTwo >= 1 &&
    ageSonTwo < ageMonica &&
    ageSonOne !== ageSonTwo
  ) {
    const resultAgeSons = ageSonOne + ageSonTwo;

    const diffAges = ageMonica - resultAgeSons;

    if (ageSonOne > ageSonTwo && ageSonOne > diffAges) {
      console.log(ageSonOne);
    } else if (ageSonTwo > ageSonOne && ageSonTwo > diffAges) {
      console.log(ageSonTwo);
    } else {
      console.log(diffAges);
    }
  }
}
