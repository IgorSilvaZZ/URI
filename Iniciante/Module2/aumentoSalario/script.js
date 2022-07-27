const { readFileSync } = require("fs");

const line = readFileSync("stdin", "utf-8");

const [wage] = line.split("\n").map((item) => parseFloat(item));

let percent = 0;

if (wage >= 0 && wage <= 400) {
  percent = 15;
} else if (wage > 400 && wage <= 800) {
  percent = 12;
} else if (wage > 800 && wage <= 1200) {
  percent = 10;
} else if (wage > 1200 && wage <= 2000) {
  percent = 7;
} else {
  percent = 4;
}

const readjustment = (wage * percent) / 100;

const newWage = wage + readjustment;

console.log(`Novo salario: ${newWage.toFixed(2)}`);
console.log(`Reajuste ganho: ${readjustment.toFixed(2)}`);
console.log(`Em percentual: ${percent} %`);
