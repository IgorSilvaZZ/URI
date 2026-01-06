const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const participantsNumber = Number(lines.shift());

const nextPhaseAvailable = Number(lines.shift());

const scores = [];

for (let i = 0; i < participantsNumber; i++) {
	const score = Number(lines.shift());

	scores.push(score);
}

scores.sort((a, b) => b - a);

/* Coletando a note de corte a partir da quantidade de participantes que vao passar para proxima fase */
const minimumScore = scores[nextPhaseAvailable - 1];

let totalParticipantsNextPhase = 0;

for (const score of scores) {
	if (score >= minimumScore) {
		totalParticipantsNextPhase++;
	}
}

console.log(totalParticipantsNextPhase);
