const { readFileSync } = require('fs');

const lines = readFileSync('stdin', 'utf-8').split('\n');

let results = [];

while (true) {
    let result = 0;
    const quantityNumber = Number(lines.shift());

    if (quantityNumber === 0) {
        break;
    }

    let countNumbers = 1;

    const currentLine = lines.shift();

    const numbers = currentLine.split(/[-+]/).map(Number);
        
    result = numbers.shift();

    const expressions = currentLine.split(/\d+/).filter(item => item !== '');

    while (countNumbers !== quantityNumber) {
        if (numbers.length) {
            const currentNumber = numbers.shift();
            const expression = expressions.shift();

            if (expression) {

                if (expression === '+') {
                    result += currentNumber
                } else if (expression === '-') {
                    result -= currentNumber;
                }
            }

        }

        countNumbers++;
    }

    results.push(result);
}

results.forEach((line, index) => {
    console.log(`Teste ${index + 1}`);
    console.log(line);
    console.log('');
})