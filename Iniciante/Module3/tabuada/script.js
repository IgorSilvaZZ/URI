const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8");

const [number] = lines.split("\n").map((item) => parseInt(item));

Array.from({ length: 10 }, (item, index) => {
  const newIndex = index + 1;
  const result = newIndex * number;
  console.log(`${newIndex} x ${number} = ${result}`);
});
