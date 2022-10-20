const { readFileSync } = require("fs");

const [text] = readFileSync("stdin", "utf-8").split("\n");

if (text.length <= 80) {
  console.log("YES");
} else {
  console.log("NO");
}
