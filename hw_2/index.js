function pow(x, y) {
	let result = 1;
	if (typeof x != "number" || Number.isNaN(x)) {
		return "Base must be a number";
	}
	if (!Number.isInteger(y)) {
		return "Degree must be an integer";
	}
	if (y === 0) {
		return 1;
	}
	for (let i = 1; i <= Math.abs(y); i++) {
		result *= x;
	}
	return y >= 0 ? result : 1 / result;
}

console.log(pow());
