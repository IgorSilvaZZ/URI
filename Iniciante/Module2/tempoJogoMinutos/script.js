const { readFileSync } = require("fs");

const line = readFileSync("stdin", "utf-8");

const [hourInitial, minutesInitial, hourEnd, minutesEnd] = line
  .split(" ")
  .map((item) => parseInt(item));

let totalHours = hourEnd - hourInitial;
let totalMinutes = minutesEnd - minutesInitial;

if (totalHours < 0) {
  totalHours = 24 + (hourEnd - hourInitial);
}

if (totalMinutes < 0) {
  totalMinutes = 60 + (minutesEnd - minutesInitial);
  totalHours--;
}

if (hourInitial == hourEnd && minutesInitial == minutesEnd) {
  console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else {
  console.log(`O JOGO DUROU ${totalHours} HORA(S) E ${totalMinutes} MINUTO(S)`);
}
