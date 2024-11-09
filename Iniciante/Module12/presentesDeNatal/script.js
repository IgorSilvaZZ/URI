const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

while (true) {
  // Quantidade de netos
  const quantity = Number(lines.shift());

  if (quantity === 0) {
    break;
  }

  const values = lines.shift().split(" ").map(Number);

  if (quantity === 1) {
    const result = values.reduce((a, b) => a + b);

    console.log(`${result} ${result}`);

    continue;
  }

  const onePresents = [];

  // Pegando os primeiros presentes de forma invertida (Do ultimo neto até o primeiro)
  for (let i = quantity - 1; i >= 0; i--) {
    onePresents.push(values[i]);
  }

  const twoPresents = [...values].splice(quantity, values.length - 1);

  let maxValue = Number.MIN_VALUE;
  let minValue = Number.MAX_VALUE;

  for (let i = 0; i < quantity; i++) {
    const result = onePresents[i] + twoPresents[i];

    if (result > maxValue) {
      maxValue = result;
    }

    if (result < minValue) {
      minValue = result;
    }
  }

  console.log(`${maxValue} ${minValue}`);
}
