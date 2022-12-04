// node prog.js input_file
// ex: node prog.js sample-input.txt
const fs = require('fs');

const fileName = process.argv[2] || 'input.txt';

const getValue = (char) => {
	const c = char.charCodeAt(0);
	return c > 96 ? c - 96 : c - 64 + 26;
};

function getIntersection(setA, setB) {
  return new Set([...setA].filter(element => setB.has(element)));
}

function createSet(str) {
	return new Set([...str]);
}

fs.readFile(fileName, (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	let sum1 = 0;
	let sum2 = 0;
	let i = 0;
	let e1 = '';
	let e2 = '';
	let e3 = '';
	for (let line of data.toString().split('\n')) {
		const firstHalf = createSet(line.slice(0, line.length / 2));
		const secondHalf = createSet(line.slice(line.length / 2));
		const common1 = getIntersection(firstHalf, secondHalf);
		for (let char of common1) {
			sum1 += getValue(char);
		}
		if (i % 3 == 0) {
			e1 = line;
		} else if (i % 3 == 1) {
			e2 = line;
		} else {
			e3 = line;
			const common2 = getIntersection(createSet(e1), getIntersection(createSet(e2), createSet(e3)));
			for (let char of common2) {
				sum2 += getValue(char);
			}
		}
		i++;
	}
	console.log(sum1);
	console.log(sum2);
});