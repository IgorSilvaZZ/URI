const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const quantityLines = Number(lines.shift());

for (let i = 0; i < quantityLines; i++) {
  const [buySoda, quantityReceiveSoda] = lines[i].split(" ").map(Number);

  if (quantityReceiveSoda > buySoda) {
    console.log(buySoda);

    continue;
  }

  const resultDivision = Math.floor(buySoda / quantityReceiveSoda);
  const restDivision = parseInt(buySoda % quantityReceiveSoda);

  const result = resultDivision + restDivision;

  console.log(result);
}
