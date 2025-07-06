const arr = [
	{
		userName: "Test",
		lastName: "Test",
		email: "test.test@gmail.com",
	},
	{
		userName: "Dmitro",
		lastName: "Porohov",
		email: "dmitro.Porohov@yahoo.com",
	},
	{
		userName: "Andrii",
		lastName: "",
		email: "andrii@mail.ru",
	},
];

function checkEmail(arr) {
	const emails = [];
	const pattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;
	for (const obj of arr) {
		if (obj["email"].match(pattern)) {
			emails.push(obj["email"]);
		}
	}
	return emails;
}

console.log(checkEmail(arr));
