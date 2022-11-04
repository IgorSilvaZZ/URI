const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

while (lines.length > 0) {
  const [numberPeoples, numberConsults] = lines.shift().split(" ").map(Number);
  let peoples = [];
  let consults = [];

  for (let i = 0; i < numberPeoples; i++) {
    peoples.push(Number(lines.shift().trim()));
  }

  for (let i = 0; i < numberConsults; i++) {
    consults.push(Number(lines.shift().trim()));
  }

  peoples.sort((a, b) => {
    return b - a;
  });

  for (let j = 0; j < consults.length; j++) {
    console.log(peoples[consults[j] - 1]);
  }
}
