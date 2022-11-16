const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

while (true) {
  const [numberPeoples, numberDates] = lines.shift().split(" ").map(Number);

  if (lines.length === 0) {
    break;
  }

  let dateChoice = "";
  let controlDate = true;

  for (let i = 0; i < numberDates; i++) {
    const infosLine = lines
      .shift()
      .split(" ")
      .map((item) => item.trim());

    const [date] = infosLine;

    let willHavePizza = true;

    for (let j = 1; j <= numberPeoples; j++) {
      const people = Number(infosLine[j]);

      if (people !== 1) {
        willHavePizza = false;
      }
    }

    if (willHavePizza && controlDate) {
      controlDate = false;
      dateChoice = date;
    }
  }

  if (dateChoice === "") {
    console.log("Pizza antes de FdI");
  } else {
    console.log(dateChoice);
  }
}
