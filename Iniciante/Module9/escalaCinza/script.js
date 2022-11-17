const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const numberCases = Number(lines.shift());

for (let i = 1; i <= numberCases; i++) {
  const typeConversion = lines.shift().trim();

  const values = lines.shift().split(" ").map(Number);

  if (typeConversion === "eye") {
    const [red, green, blue] = values;

    const percentRed = (red * 30) / 100;
    const percentGreen = (green * 59) / 100;
    const percentBlue = (blue * 11) / 100;

    const result = percentRed + percentGreen + percentBlue;

    console.log(`Caso #${i}: ${result.toFixed(0)}`);
  }

  if (typeConversion === "mean") {
    const [red, green, blue] = values;

    const arrange = (red + green + blue) / 3;

    console.log(`Caso #${i}: ${arrange.toFixed(0)}`);
  }

  if (typeConversion === "max") {
    const maxValue = values.reduce((prevent, current) =>
      prevent > current ? prevent : current
    );

    console.log(`Caso #${i}: ${maxValue}`);
  }

  if (typeConversion === "min") {
    const minValue = values.reduce((prevent, current) =>
      prevent < current ? prevent : current
    );

    console.log(`Caso #${i}: ${minValue}`);
  }
}
