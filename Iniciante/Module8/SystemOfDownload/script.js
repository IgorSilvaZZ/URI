const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [quantityLines] = lines.map(Number);

const listMusics = [
  "PROXYCITY",
  "P.Y.N.G.",
  "DNSUEY!",
  "SERVERS",
  "HOST!",
  "CRIPTONIZE",
  "OFFLINE DAY",
  "SALT",
  "ANSWER!",
  "RAR?",
  "WIFI ANTENNAS",
];

for (let i = 1; i <= quantityLines; i++) {
  const [buttonOne, buttonTwo] = lines[i].split(" ").map(Number);

  const valueMusic = buttonOne + buttonTwo;

  console.log(listMusics[valueMusic]);
}
