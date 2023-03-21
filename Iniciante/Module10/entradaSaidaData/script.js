const { readFileSync } = require("fs");

const [date] = readFileSync("stdin", "utf-8").split("\n");

const [day, month, year] = date.split("/");

console.log(`${month}/${day}/${year}`);
console.log(`${year}/${month}/${day}`);
console.log(`${day}-${month}-${year}`);
