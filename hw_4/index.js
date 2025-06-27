let services = {
	"Стрижка": "60.50 грн",
	"Гоління": "80 грн",
	"Миття голови": "100 грн",
	"Фарбування": "1000 грн",
	getValues,
	price,
	minPrice,
	maxPrice,
};

function getValues() {
	let values = [];
	for (const value in this) {
		if (typeof this[value] === "string") {
			values.push(parseFloat(this[value]));
		}
	}
	return values;
}

function price() {
	const values = this.getValues();
	const totalPrice = values.reduce((acc, curr) => acc + curr, 0).toFixed(2);
	return `Загальна вартість наданих послуг: ${totalPrice} грн`;
}

function minPrice() {
	const values = this.getValues();
	const min = Math.min(...values).toFixed(2);
	return `Мінімальна ціна: ${min} грн`;
}

function maxPrice() {
	const values = this.getValues();
	const max = Math.max(...values).toFixed(2);
	return `Максимальна ціна: ${max} грн`;
}

console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());
