const { readFileSync } = require("fs");

const line = readFileSync("stdin", "utf-8");

const [A, B] = line.split(" ").map((item) => parseInt(item));

let isMultiple = false;

for (let i = 0; i <= 10; i++) {
  const result = parseInt(A * i);
  if (result === B) {
    isMultiple = true;
    break;
  }
}

if (isMultiple) {
  console.log("Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}
