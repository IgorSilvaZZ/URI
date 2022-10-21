const { readFileSync } = require("fs");

const [text] = readFileSync("stdin", "utf-8").split("\n");

if (text.length > 140) {
  console.log("MUTE");
} else {
  console.log("TWEET");
}
