const { readFileSync } = require("fs");

const [note] = readFileSync("stdin", "utf-8").split("\n").map(Number);

if (note === 0) {
  console.log("E");
} else if (note >= 1 && note <= 35) {
  console.log("D");
} else if (note <= 60) {
  console.log("C");
} else if (note <= 85) {
  console.log("B");
} else if (note <= 100) {
  console.log("A");
}
