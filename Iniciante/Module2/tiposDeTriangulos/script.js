const { readFileSync } = require("fs");

const [line] = readFileSync("stdin", "utf-8").split("\n");

const numbers = line.split(" ").map((item) => parseFloat(item));

// numero1, numero2, numero3
const [A, B, C] = numbers.sort((a, b) => b - a);

const notTriangle = A >= B + C;
const rectangle = Math.pow(A, 2) === Math.pow(B, 2) + Math.pow(C, 2);
const obtusangle = Math.pow(A, 2) > Math.pow(B, 2) + Math.pow(C, 2);
const acutangulo = Math.pow(A, 2) < Math.pow(B, 2) + Math.pow(C, 2);
const equilateral = numbers.every((number) => number === A);
const isosceles = A === B || B === C || C === A;

if (notTriangle) {
  console.log("NAO FORMA TRIANGULO");
  return;
}

if (rectangle) {
  console.log("TRIANGULO RETANGULO");
} else if (obtusangle) {
  console.log("TRIANGULO OBTUSANGULO");
} else if (acutangulo) {
  console.log("TRIANGULO ACUTANGULO");
}

if (equilateral) {
  console.log("TRIANGULO EQUILATERO");
} else if (isosceles) {
  console.log("TRIANGULO ISOSCELES");
}
