const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const numberGames = Number(lines.shift());

let someWinnersPlayer = 0;

for (let i = 0; i < numberGames; i++) {
  const doorCarPosition = Number(lines[i]) - 1;

  // Porta 1, 2 e 3
  const doors = [false, false, false];

  doors[doorCarPosition] = true;

  // Jogagador sempre vai estar na primeira posição
  doors.shift();

  const notDoorCarIndex = doors.findIndex((door) => !door);

  if (notDoorCarIndex >= 0) {
    doors.splice(notDoorCarIndex, 1);
  }

  const [resultDoor] = doors;

  if (resultDoor) {
    someWinnersPlayer++;
  }
}

console.log(someWinnersPlayer);
