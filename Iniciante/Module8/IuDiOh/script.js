const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

while (true) {
  const numberAttributes = Number(lines.shift());

  if (lines.length === 0) {
    break;
  }

  const cardsMarcos = [];
  const cardsLeonardo = [];

  const [numbersCardsMarcos, numbersCardsLeonardo] = lines
    .shift()
    .split(" ")
    .map(Number);

  for (let i = 0; i < numbersCardsMarcos; i++) {
    const attributesMarcos = lines
      .shift()
      .split(" ")
      .map((item) => Number(item.trim()));

    for (let j = 0; j < numberAttributes; j++) {
      cardsMarcos.push({
        card: i + 1,
        attribute: attributesMarcos[j],
        indexAttribute: j + 1,
      });
    }
  }

  for (let i = 0; i < numbersCardsLeonardo; i++) {
    const attributesLeonardo = lines
      .shift()
      .split(" ")
      .map((item) => Number(item.trim()));

    for (let j = 0; j < numberAttributes; j++) {
      cardsLeonardo.push({
        card: i + 1,
        attribute: attributesLeonardo[j],
        indexAttribute: j + 1,
      });
    }
  }

  const [choiceMarcos, choiceLeonardo] = lines.shift().split(" ").map(Number);

  const attributeSorted = Number(lines.shift());

  const { attribute: attributeMarcos } = cardsMarcos.find(
    (card) =>
      card.card === choiceMarcos && card.indexAttribute === attributeSorted
  );
  const { attribute: attributeLeonardo } = cardsLeonardo.find(
    (card) =>
      card.card === choiceLeonardo && card.indexAttribute === attributeSorted
  );

  if (attributeMarcos > attributeLeonardo) {
    console.log("Marcos");
  } else if (attributeLeonardo > attributeMarcos) {
    console.log("Leonardo");
  } else {
    console.log("Empate");
  }
}
