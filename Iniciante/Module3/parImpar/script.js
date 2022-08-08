const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseInt(item));

const [numberLines] = lines;

for (let i = 1; i <= numberLines; i++) {
  const currentValue = lines[i];

  let message = "";

  if (currentValue % 2 === 0) {
    message += "EVEN ";
  } else {
    message += "ODD ";
  }

  if (currentValue < 0) {
    message += "NEGATIVE";
  } else {
    message += "POSITIVE";
  }

  if (currentValue === 0) {
    message = "NULL";
  }

  console.log(message);
}
