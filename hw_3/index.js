const MIN = 100;
const MAX = 1000;

function checkProbabilityTheory(count) {
	let result = [],
		resultOdd = [],
		resultEven = [];
	for (let i = 1; i <= count; i++) {
		let randomNumber = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
		if (randomNumber % 2 === 0) {
			resultEven.push(randomNumber);
		} else resultOdd.push(randomNumber);
	}
	result = resultOdd.concat(resultEven);
	const percentEven = Math.round((resultEven.length * 100) / result.length);
	const percentOdd = Math.round((resultOdd.length * 100) / result.length);

	return {
		"Кількість згенерованих чисел": count,
		"Парних чисел": resultEven.length,
		"Не парних чисел": resultOdd.length,
		"Відсоток парних": percentEven,
		"Відсоток не парних": percentOdd,
	};
}

console.log(checkProbabilityTheory(100000));
