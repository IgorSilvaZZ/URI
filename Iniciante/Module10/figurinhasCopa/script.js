const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

while (true) {
  const [numberFigures, numberFiguresRares, numberBuyFigures] = lines
    .shift()
    .split(" ")
    .map(Number);

  if (lines.length === 0) {
    break;
  }

  let restRaresFigures = numberFiguresRares;

  const raresFigures = [];

  const raresFiguresLine = lines.shift().split(" ");

  for (let i = 0; i < numberFiguresRares; i++) {
    const figure = Number(raresFiguresLine[i].trim());

    raresFigures.push(figure);
  }

  const figuresBuyLines = lines.shift().split(" ");

  for (let i = 0; i < numberBuyFigures; i++) {
    const currentFigures = Number(figuresBuyLines[i].trim());

    if (currentFigures >= 1 && currentFigures <= numberFigures) {
      const figureRareIndex = raresFigures.findIndex(
        (figure) => figure === currentFigures
      );

      if (figureRareIndex > -1) {
        raresFigures.splice(figureRareIndex, 1);
        restRaresFigures--;
      }
    }
  }

  console.log(restRaresFigures);
}
