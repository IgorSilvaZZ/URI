const { readFileSync } = require("fs");

const [totalMeals, requestsMeals] = readFileSync("stdin", "utf-8").split("\n");

const [totalChicken, totalSteak, totalPasta] = totalMeals
  .split(" ")
  .map(Number);
const [reqChicken, reqSteak, reqPast] = requestsMeals.split(" ").map(Number);

let some = 0;

const diffChicken = reqChicken - totalChicken;

const diffSteak = reqSteak - totalSteak;

const diffPast = reqPast - totalPasta;

if (diffChicken > 0) {
  some += diffChicken;
}

if (diffSteak > 0) {
  some += diffSteak;
}

if (diffPast > 0) {
  some += diffPast;
}

console.log(some);
