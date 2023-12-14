const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("/n");

let count = 97;

const values = Array.from({ length: 26 }, (item, index) => {
  return count + index;
});

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

alphabet.forEach((item, index) => {
  console.log(`${values[index]} e ${item}`);
});
