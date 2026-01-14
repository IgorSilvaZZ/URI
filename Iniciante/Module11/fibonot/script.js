const { readFileSync } = require("fs");

const [number] = readFileSync("stdin", "utf-8").split("\n").map(Number);

const generateFibonacci = () => {
	let prevNumber = 0;
	let currentNumber = 1;
	let nextNumber = 0;

	const numbersFibonacci = new Set();

	const MAX_GENERATE_FIBONACCI = 500_000;

	for (let i = 1; i <= MAX_GENERATE_FIBONACCI; i++) {
		numbersFibonacci.add(prevNumber);

		nextNumber = prevNumber + currentNumber;
		prevNumber = currentNumber;
		currentNumber = nextNumber;
	}

	return numbersFibonacci;
};

const fibonacci = generateFibonacci();

let currentNumber = 1;
let i = 0;

while (i < number) {
	if (!fibonacci.has(currentNumber)) {
		i++;
	}

	currentNumber++;
}

const indexToSearchNumber = currentNumber - 1;

console.log(indexToSearchNumber);
