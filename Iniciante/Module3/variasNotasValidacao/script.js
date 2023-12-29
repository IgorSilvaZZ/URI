const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseFloat(item));

function media() {
  let availableNotes = [];
  let choice = 0;

  while (availableNotes.length !== 2) {
    const note = lines.shift();

    if (note < 0 || note > 10) {
      console.log("nota invalida");
    } else {
      availableNotes.push(note);
    }
  }

  const some = availableNotes.reduce((total, current) => {
    return (total += current);
  }, 0);

  const result = some / 2;

  console.log(`media = ${result.toFixed(2)}`);

  availableNotes = [];

  do {
    console.log("novo calculo (1-sim 2-nao)");

    choice = parseInt(lines.shift());

    if (choice === 1) {
      media();
    }
  } while (![1, 2].includes(choice));
}

media();
