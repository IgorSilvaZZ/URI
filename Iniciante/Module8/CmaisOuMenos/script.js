const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const fruits = {
  suco_de_laranja: 120,
  morango_fresco: 85,
  mamao: 85,
  goiaba_vermelha: 70,
  manga: 56,
  laranja: 50,
  brocolis: 34,
};

while (true) {
  const quantityFruits = Number(lines.shift().trim());

  if (quantityFruits === 0) {
    break;
  }

  let someMg = 0;

  for (let i = 0; i < quantityFruits; i++) {
    const infos = lines.shift().split(" ");

    const quantityFruitsConsumed = Number(infos.shift().trim());

    const fruit = infos.join("_").trim();

    if (fruits[fruit]) {
      const calMg = fruits[fruit] * quantityFruitsConsumed;
      someMg += calMg;
    }
  }

  if (someMg > 130) {
    const result = someMg - 130;
    console.log(`Menos ${result} mg`);
  } else if (someMg < 110) {
    const result = 110 - someMg;
    console.log(`Mais ${result} mg`);
  } else {
    console.log(`${someMg} mg`);
  }
}
