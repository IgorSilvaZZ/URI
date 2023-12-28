const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const validationsNumber = [0, "", null, undefined];

for (let index in lines) {
  const [number1, number2] = lines[index].split(" ").map(Number);

  if (
    !validationsNumber.includes(number1) ||
    !validationsNumber.includes(number2)
  ) {
    // Primeiro Quadrante
    if (number1 > 0.0 && number2 > 0.0) {
      console.log("primeiro");
    }
    // Segundo Quadrante
    else if (number1 < 0.0 && number2 > 0.0) {
      console.log("segundo");
    }
    // Terceiro Quadrante
    else if (number1 < 0.0 && number2 < 0.0) {
      console.log("terceiro");
    }
    // Quarto Quadrante
    else if (number1 > 0.0 && number2 < 0.0) {
      console.log("quarto");
    }
  }
}
