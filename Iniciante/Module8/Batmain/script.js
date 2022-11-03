const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [numberLines] = lines.map(Number);

for (let i = 1; i <= numberLines; i++) {
  const currentVillain = lines[i].trim();

  console.log("Y");
}
