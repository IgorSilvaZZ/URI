const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const numberWords = Number(lines.shift());

const wordsSearched = [];

for (let i = 0; i < numberWords; i++) {
	const word = lines.shift().toLowerCase().trim();

	wordsSearched.push(word);
}

const numberConsulting = Number(lines.shift());

for (let i = 0; i < numberConsulting; i++) {
	const query = lines.shift().toLowerCase().trim();

	const foundWords = wordsSearched.filter((word) => word.startsWith(query));

	if (foundWords.length === 0) {
		console.log(-1);

		continue;
	}

	const maxWord = [...foundWords].sort((a, b) => b.length - a.length)[0] || "";

	console.log(foundWords.length, maxWord.length);
}
