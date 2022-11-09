const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

while (true) {
  const [numberGameplays, identification] = lines
    .shift()
    .split(" ")
    .map(Number);

  if (lines.length === 0) {
    break;
  }

  let someGamePlays = 0;

  for (let i = 0; i < numberGameplays; i++) {
    const [author, game] = lines.shift().split(" ").map(Number);

    if (author === identification && game === 0) {
      someGamePlays++;
    }
  }

  console.log(someGamePlays);
}
