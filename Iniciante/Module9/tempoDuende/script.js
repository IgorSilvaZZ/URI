const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

while (lines.length > 0) {
  const restMinutes = Number(lines.shift());

  const [firstGift, secundGift] = lines.shift().split(" ").map(Number);

  const someMinutes = firstGift + secundGift;

  if (someMinutes <= restMinutes) {
    console.log("Farei hoje!");
  } else {
    console.log("Deixa para amanha!");
  }
}
