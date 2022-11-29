const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split(" ").map(Number);

let some = 0;
let index = 0;
let countNames = 0;

const names = [
  "Dasher",
  "Dancer",
  "Prancer",
  "Vixen",
  "Comet",
  "Cupid",
  "Donner",
  "Blitzen",
  "Rudolph",
];

const namesList = [];

for (let i = 0; i < lines.length; i++) {
  some += lines[i];
}

while (true) {
  if (index === some) {
    break;
  }

  if (countNames === names.length) {
    countNames = 0;
  }

  namesList.push(names[countNames]);

  countNames++;
  index++;
}

console.log(namesList[namesList.length - 1]);
