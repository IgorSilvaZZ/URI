const { readFileSync } = require("fs");

const line = readFileSync("stdin", "utf-8");

const [hourInitial, minutesInitial, hourEnd, minutesEnd] = line
  .split(" ")
  .map((item) => parseInt(item));

if (hourInitial === hourEnd && minutesInitial === minutesEnd) {
  console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else {
  let hourInitialForMinutes = hourInitial * 60 + minutesInitial;
  let hourEndForMinutes = hourEnd * 60 + minutesEnd;

  let hoursForMinutes = hourEndForMinutes - hourInitialForMinutes;

  let hours = parseInt(hoursForMinutes / 60);
  let minutes = parseInt(hoursForMinutes % 60);

  console.log(`O JOGO DUROU ${hours} HORA(S) E ${minutes} MINUTO(S)`);
}
