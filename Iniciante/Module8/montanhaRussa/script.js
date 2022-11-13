const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

while (true) {
  const [numberVisitors, heightMin, heightMax] = lines
    .shift()
    .split(" ")
    .map(Number);

  let somePermitted = 0;

  for (let i = 0; i < numberVisitors; i++) {
    const heightVisitor = Number(lines.shift());

    if (heightVisitor >= heightMin && heightVisitor <= heightMax) {
      somePermitted++;
    }
  }

  if (lines.length === 0) {
    break;
  }

  console.log(somePermitted);
}
