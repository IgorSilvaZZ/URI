const { readFileSync } = require("fs");

const [firstLine] = readFileSync("stdin", "utf-8").split("\n");

const [deliveryDay, correctionDay] = firstLine.split(" ").map(Number);

const diffDays = correctionDay - deliveryDay;

if (diffDays < 0) {
  console.log("Eu odeio a professora!");
} else if (diffDays >= 3) {
  console.log("Muito bem! Apresenta antes do Natal!");
} else {
  console.log("Parece o trabalho do meu filho!");

  if (deliveryDay + 2 < 24) {
    console.log("TCC Apresentado!");
  } else {
    console.log("Fail! Entao eh nataaaaal!");
  }
}
