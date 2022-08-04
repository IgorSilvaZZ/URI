const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8");

const [number] = lines.split("\n").map((item) => parseInt(item));

Array.from({ length: number }, (item, index) => {
  let newIndex = index + 1;

  if (newIndex % 2 === 1) {
    console.log(newIndex);
  }
});
