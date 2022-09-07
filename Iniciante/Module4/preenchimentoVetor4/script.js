const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => Number(item));

let pairs = [];
let odd = [];

for (let i = 0; i < 15; i++) {
  const currentNumber = lines[i];

  if (currentNumber % 2 === 0) {
    pairs.push(currentNumber);
  } else {
    odd.push(currentNumber);
  }

  if (pairs.length === 5) {
    pairs.forEach((number, index) => {
      console.log(`par[${index}] = ${number}`);
    });

    pairs = [];
  }

  if (odd.length === 5) {
    odd.forEach((number, index) => {
      console.log(`impar[${index}] = ${number}`);
    });

    odd = [];
  }
}

odd.forEach((number, index) => {
  console.log(`impar[${index}] = ${number}`);
});

pairs.forEach((number, index) => {
  console.log(`par[${index}] = ${number}`);
});
