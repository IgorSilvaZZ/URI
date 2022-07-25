const { readFileSync } = require("fs");

const line = readFileSync("stdin", "utf-8");

const [hourInitial, hourEnd] = line.split(" ").map((item) => parseInt(item));

let duration = 0;

if (hourInitial === hourEnd) {
  console.log("O JOGO DUROU 24 HORA(S)");
} else if (hourEnd < hourInitial) {
  duration = hourEnd - hourInitial + 24;

  console.log(`O JOGO DUROU ${duration} HORA(S)`);
} else {
  duration = hourEnd - hourInitial;

  console.log(`O JOGO DUROU ${duration} HORA(S)`);
}
