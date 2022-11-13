const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

while (true) {
  const workouts = Number(lines.shift());

  if (lines.length === 0) {
    break;
  }

  let record = 0;

  for (let i = 1; i <= workouts; i++) {
    const [minutes, km] = lines.shift().split(" ").map(Number);

    if (km / minutes > record) {
      console.log(i);
      record = km / minutes;
    }
  }
}
