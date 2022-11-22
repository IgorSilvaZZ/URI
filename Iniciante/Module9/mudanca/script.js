const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

while (true) {
  const angle = Number(lines.shift());

  if (lines.length === 0) {
    break;
  }

  if (angle < 90) {
    console.log("Bom Dia!!");
  } else if (angle < 180) {
    console.log("Boa Tarde!!");
  } else if (angle < 270) {
    console.log("Boa Noite!!");
  } else if (angle < 360) {
    console.log("De Madrugada!!");
  } else {
    console.log("Bom Dia!!");
  }
}
