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

function getSum(set) {
	let sum = 0;
	for (let char of set) {
		sum += getValue(char);
	}
	return sum;
}

fs.readFile(fileName, (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	let sum1 = 0;
	let sum2 = 0;
	let i = 0;
	const arr = Array(3).fill('');
	for (let line of data.toString().split('\n')) {
		const firstHalf = createSet(line.slice(0, line.length / 2));
		const secondHalf = createSet(line.slice(line.length / 2));
		const common1 = getIntersection(firstHalf, secondHalf);
		sum1 += getSum(common1);

		arr[i % 3] = line;
		if (i++ % 3 == 2) {
			const common2 = getIntersection(createSet(arr[0]), getIntersection(createSet(arr[1]), createSet(arr[2])));
			sum2 += getSum(common2)
		}
	}
	console.log(sum1);
	console.log(sum2);
});
