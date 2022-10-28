const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const numberPeoples = Number(lines.shift());

let i = 0;

while (i < numberPeoples) {
  const nameParticipant = lines.shift().trim();

  const noteDifficult = Number(lines.shift());

  let notes = lines.shift().split(" ").map(Number);

  let maxNote = notes[0];
  let minNote = notes[0];

  for (let j = 0; j < notes.length; j++) {
    const currentNote = notes[j];

    if (currentNote > maxNote) {
      maxNote = currentNote;
    }

    if (currentNote < minNote) {
      minNote = currentNote;
    }
  }

  notes = notes.filter((note) => note !== maxNote && note !== minNote);

  const someNotes = notes.reduce((preventNote, currentNote) => {
    return preventNote + currentNote;
  }, 0);

  const result = someNotes * noteDifficult;

  console.log(`${nameParticipant} ${result.toFixed(2)}`);

  i++;
}
