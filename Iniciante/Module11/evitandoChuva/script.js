const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const numberDays = Number(lines.shift());

let quantityPurchasedHome = 0;
let quantityPurchasedOffice = 0;

let currentQuantityHome = 0;
let currentQuantityOffice = 0;

for (let i = 0; i < numberDays; i++) {
  /* Ida e Volta */
  const [going, back] = lines[i]
    .split(" ")
    .map((item) => item.trim().toLowerCase());

  /* Indo para o escritorio */
  if (going === "chuva") {
    if (currentQuantityHome <= 0) {
      quantityPurchasedHome++;
      currentQuantityHome++;
    }

    currentQuantityHome--;
    currentQuantityOffice++;
  }

  if (back === "chuva") {
    if (currentQuantityOffice <= 0) {
      quantityPurchasedOffice++;
      currentQuantityOffice++;
    }

    currentQuantityOffice--;
    currentQuantityHome++;
  }
}

console.log(quantityPurchasedHome, quantityPurchasedOffice);
