const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const getMessage = (angle) => {
	let message = "";

	if (angle < 90) {
		message = "Bom Dia!!";
	} else if (angle < 180) {
		message = "Boa Tarde!!";
	} else if (angle < 270) {
		message = "Boa Noite!!";
	} else if (angle < 360) {
		message = "De Madrugada!!";
	} else {
		message = "Bom Dia!!";
	}

	return message;
};

while (lines.length) {
	const angle = Number(lines.shift());

	const message = getMessage(angle);

	const decimalHours = angle / 15;

	const hours = Math.floor(decimalHours);

	const decimalMinutes = (decimalHours - hours) * 60;

	const minutes = Math.floor(decimalMinutes);

	let seconds = Math.round((decimalMinutes - minutes) * 60);

	let finalMinutes = minutes;

	/* Assumindo que 0 Graus começa as 6 da manha e nao a meia noite */
	let finalHours = (hours + 6) % 24;

	/* Formatação dos segundos */
	if (seconds === 60) {
		seconds = 0;
		finalMinutes++;
	}

	/* Formatação dos minutos */
	if (finalMinutes === 60) {
		finalMinutes = 0;
		finalHours = (finalHours + 1) % 24;
	}

	const pad = (v) => String(v).padStart(2, "0");

	console.log(message);
	console.log(`${pad(finalHours)}:${pad(finalMinutes)}:${pad(seconds)}`);
}
