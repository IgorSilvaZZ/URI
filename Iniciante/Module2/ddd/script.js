const { readFileSync } = require("fs");

const line = readFileSync("stdin", "utf-8");

const [dd] = line.split("\n").map((item) => parseInt(item));

const ddds = {
  61: "Brasilia",
  71: "Salvador",
  11: "Sao Paulo",
  21: "Rio de Janeiro",
  32: "Juiz de Fora",
  19: "Campinas",
  27: "Vitoria",
  31: "Belo Horizonte",
};

if (ddds[dd]) {
  console.log(ddds[dd]);
} else {
  console.log("DDD nao cadastrado");
}
