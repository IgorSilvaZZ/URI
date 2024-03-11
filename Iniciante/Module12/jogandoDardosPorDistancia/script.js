const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const numberCases = Number(lines.shift());

for (let currentCase = 1; currentCase <= numberCases; currentCase++) {
  let pointsJoao = 0;
  let pointsMaria = 0;

  for (let currentLine = 1; currentLine <= 6; currentLine++) {
    const [points, distance] = lines.shift().split(" ").map(Number);

    if (currentLine <= 3) {
      pointsJoao += points * distance;
    } else {
      pointsMaria += points * distance;
    }
  }

  if (pointsMaria > pointsJoao) {
    console.log("MARIA");
  } else {
    console.log("JOAO");
  }
}
