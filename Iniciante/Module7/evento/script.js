const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

for (let i = 0; i < lines.length; i++) {
  const [increaseMonster, xpMonster] = lines[i].split(" ").map(Number);

  if (increaseMonster === 0 && xpMonster === 0) {
    break;
  }

  const totalXP = xpMonster * increaseMonster;

  console.log(totalXP);
}
