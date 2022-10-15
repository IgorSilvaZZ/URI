const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [initial, actions] = lines[0].split(" ").map(Number);

let rest = initial;

for (let i = 1; i <= actions; i++) {
  const action = lines[i].trim();

  if (action === "fechou") {
    rest += 1;
  }

  if (action === "clicou") {
    rest -= 1;
  }
}

console.log(rest);
