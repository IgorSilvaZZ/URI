const { readFileSync } = require("fs");

const [A, B, C] = readFileSync("stdin", "utf-8").split(" ").map(Number);

if (A + B > C && A + C > B && B + C > A) {
  if (A === B && A == C && B == C) {
    console.log("Valido-Equilatero");
  } else if (A !== B && A !== C && B !== C) {
    console.log("Valido-Escaleno");
  } else if (A === B || A === C || B == C) {
    console.log("Valido-Isoceles");
  }

  let hypotenuse = 0;
  let peccaryOne = 0;
  let peccaryTwo = 0;

  if (A > B && A > C) {
    hypotenuse = A;
    peccaryOne = B;
    peccaryTwo = C;
  } else if (B > A && B > C) {
    hypotenuse = B;
    peccaryOne = A;
    peccaryTwo = C;
  } else {
    hypotenuse = C;
    peccaryOne = A;
    peccaryTwo = B;
  }

  const resultPeccaries = peccaryOne * peccaryOne + peccaryTwo * peccaryTwo;

  const resultHypotenuse = hypotenuse * hypotenuse;

  if (resultPeccaries === resultHypotenuse) {
    console.log("Retangulo: S");
  } else {
    console.log("Retangulo: N");
  }
} else {
  console.log("Invalido");
}
