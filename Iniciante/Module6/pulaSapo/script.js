const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [jumpHeight, numberPipes] = lines[0].split(" ").map(Number);

const pipes = lines[1].split(" ").map(Number);

let win = true;

for (let i = 0; i < numberPipes - 1; i++) {
  const currentValue = pipes[i];
  const nextValue = pipes[i + 1];

  const diff = currentValue - nextValue;

  if (diff < -jumpHeight) {
    win = false;
  } else if (diff > jumpHeight) {
    win = false;
  }
}

if (win) {
  console.log("YOU WIN");
} else {
  console.log("GAME OVER");
}
