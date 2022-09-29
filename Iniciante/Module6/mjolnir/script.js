const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [numberLines] = lines;

for (let i = 1; i <= numberLines; i++) {
  const [nameHero] = lines[i].split(" ");

  if (nameHero !== "Thor") {
    console.log("N");
  } else {
    console.log("Y");
  }
}
