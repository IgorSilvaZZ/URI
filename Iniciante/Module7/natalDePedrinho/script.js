const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const mounts = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
};

while (lines.length > 0) {
  const [mouth, day] = lines.shift().split(" ").map(Number);

  const diffDays = 25 - day;

  let mouthForDays = 0;

  for (let j = mouth; j < 12; j++) {
    mouthForDays += mounts[j];
  }

  const totalDays = mouthForDays + diffDays;

  if (totalDays < 0) {
    console.log("Ja passou!");
  } else if (totalDays === 0) {
    console.log("E natal!");
  } else if (totalDays === 1) {
    console.log("E vespera de natal!");
  } else {
    console.log(`Faltam ${totalDays} dias para o natal!`);
  }
}
