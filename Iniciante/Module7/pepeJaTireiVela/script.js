const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [numberLines] = lines.map(Number);

for (let i = 1; i <= numberLines; i++) {
  let [hour, minutes, doorOpened] = lines[i]
    .split(" ")
    .map((item) => item.trim());

  doorOpened = Number(doorOpened);

  const messageDoor = doorOpened === 1 ? "A porta abriu!" : "A porta fechou!";

  if (hour.length < 2) {
    hour = hour.padStart(2, "0");
  }

  if (minutes.length < 2) {
    minutes = minutes.padStart(2, "0");
  }

  console.log(`${hour}:${minutes} - ${messageDoor}`);
}
