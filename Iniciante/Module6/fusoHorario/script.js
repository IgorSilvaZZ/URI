const { readFileSync } = require("fs");

let [exitTime, timeTravel, timezone] = readFileSync("stdin", "utf-8")
  .split(" ")
  .map(Number);

let some = 0;

if (exitTime === 0) {
  exitTime = 24;
}

some = exitTime + timeTravel + timezone;

if (some === 24) {
  some = 0;
}

if (some > 24) {
  some = some % 24;
}

console.log(some);
