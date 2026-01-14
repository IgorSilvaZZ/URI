const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const quantityGroups = Number(lines.shift());

for (let i = 0; i < quantityGroups; i++) {
	const group = Number(lines.shift());

	const groupToBinary = group.toString(2);

	let currentSequency = 0;
	let maxSequency = 0;

	for (let j = 0; j < groupToBinary.length; j++) {
		const currentBinary = Number(groupToBinary[j]);

		if (currentBinary === 0) {
			currentSequency = 0;
		} else {
			currentSequency++;
		}

		if (currentSequency > maxSequency) {
			maxSequency = currentSequency;
		}
	}

	console.log(maxSequency);
}
