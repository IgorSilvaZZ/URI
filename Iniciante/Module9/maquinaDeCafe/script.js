const { readFileSync } = require("fs");

/* Valores dos respectivos andares */
const [first, secund, third] = readFileSync("stdin", "utf-8")
	.split("\n")
	.map(Number);

const calculateTime = (positionMachine) => {
	let totalInMinutes = 0;

	/* Quantidade de pessoas por andar * andar - posição da maquina * quantidade total de minutos gastos */

	totalInMinutes += first * Math.abs(1 - positionMachine) * 2;
	totalInMinutes += secund * Math.abs(2 - positionMachine) * 2;
	totalInMinutes += third * Math.abs(3 - positionMachine) * 2;

	return totalInMinutes;
};

const allTimes = [calculateTime(1), calculateTime(2), calculateTime(3)];

const minTotalMinutes = Math.min(...allTimes);

console.log(minTotalMinutes);
