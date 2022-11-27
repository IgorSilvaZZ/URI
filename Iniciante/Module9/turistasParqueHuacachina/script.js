const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let some = 0;
let totalJeeps = 0;

while (true) {
  let [movement, quantityPeoples] = lines.shift().split(" ");

  quantityPeoples = Number(quantityPeoples);

  if (movement === "SALIDA") {
    some += quantityPeoples;
    totalJeeps++;
  } else if (movement === "VUELTA") {
    some -= quantityPeoples;
    totalJeeps--;
  } else {
    console.log(some);
    console.log(totalJeeps);
    break;
  }
}
