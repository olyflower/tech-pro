db.createCollection("Users", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["email", "password", "role", "createdAt", "updatedAt"],
			properties: {
				email: {
					bsonType: "string",
					description: "Email користувача, обов'язкове поле",
				},
				password: {
					bsonType: "string",
					description: "Пароль, обов'язкове поле",
				},
				role: {
					bsonType: "string",
					enum: ["user", "admin"],
					description: "Роль користувача, обов'язкове поле",
				},
				createdAt: {
					bsonType: "date",
					description: "Дата створення, обов'язкове поле",
				},
				updatedAt: {
					bsonType: "date",
					description: "Дата оновлення, обов'язкове поле",
				},
			},
		},
	},
});

db.Users.insertMany([
	{
		email: "ivan@example.com",
		password: "A12356",
		role: "user",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		email: "anna@example.com",
		password: "B12345",
		role: "user",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		email: "oleg@example.com",
		password: "C123456",
		role: "user",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		email: "katya@example.com",
		password: "D123456",
		role: "admin",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		email: "maria@example.com",
		password: "E123456",
		role: "user",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
]);

db.createCollection("UserProfile", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["userId", "name", "lastName", "createdAt", "updatedAt"],
			properties: {
				userId: {
					bsonType: "objectId",
					description: "Посилання на Users id",
				},
				name: {
					bsonType: "string",
					description: "Ім'я, обов'язкове поле",
				},
				lastName: {
					bsonType: "string",
					description: "Прізвище, обов'язкове поле",
				},
				photoFilename: {
					bsonType: "string",
					description: "Назва файлу фотографії користувача",
				},
				dateBirth: { bsonType: "date", description: "Дата народження" },
				country: { bsonType: "string", description: "Країна" },
				createdAt: {
					bsonType: "date",
					description: "Дата створення, обов'язкове поле",
				},
				updatedAt: {
					bsonType: "date",
					description: "Дата оновлення, обов'язкове поле",
				},
			},
		},
	},
});

db.UserProfile.insertMany([
	{
		userId: db.Users.findOne({ email: "ivan@example.com" })._id,
		name: "44Ivan",
		lastName: "Petrenko",
		photoFilename: "ivan.png",
		dateBirth: new Date("1990-05-10"),
		country: "Ukraine",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		userId: db.Users.findOne({ email: "anna@example.com" })._id,
		name: "Anna",
		lastName: "Koval",
		photoFilename: "anna.png",
		dateBirth: new Date("1995-03-12"),
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		userId: db.Users.findOne({ email: "oleg@example.com" })._id,
		name: "Oleg",
		lastName: "Shevchenko",
		photoFilename: "oleg.png",
		dateBirth: new Date("1988-07-20"),
		country: "Poland",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		userId: db.Users.findOne({ email: "katya@example.com" })._id,
		name: "Katya",
		lastName: "Ivanenko",
		photoFilename: "katya.png",
		dateBirth: new Date("1992-01-15"),
		country: "Ukraine",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		userId: db.Users.findOne({ email: "maria@example.com" })._id,
		name: "Maria",
		lastName: "Bondar",
		photoFilename: "maria.png",
		dateBirth: new Date("1993-09-05"),
		country: "Germany",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
]);

db.createCollection("CarBrands", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["title", "createdAt", "updatedAt"],
			properties: {
				title: {
					bsonType: "string",
					description: "Назва бренду, обов'язкове поле",
				},
				logoFilename: {
					bsonType: "string",
					description: "Назва файлу фото бренду",
				},
				createdAt: {
					bsonType: "date",
					description: "Дата створення, обов'язкове поле",
				},
				updatedAt: {
					bsonType: "date",
					description: "Дата оновлення, обов'язкове поле",
				},
			},
		},
	},
});

db.CarBrands.insertMany([
	{
		title: "Toyota",
		logoFilename: "toyota.png",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		title: "BMW",
		logoFilename: "bmw.png",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		title: "Mercedes",
		logoFilename: "mercedes.png",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		title: "Audi",
		logoFilename: "audi.png",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		title: "Tesla",
		logoFilename: "tesla.png",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
]);

db.createCollection("CarModels", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["brandId", "title", "createdAt", "updatedAt"],
			properties: {
				brandId: {
					bsonType: "objectId",
					description: "Посилання на CarBrands id",
				},
				title: {
					bsonType: "string",
					description: "Назва моделі, обов'язкове поле",
				},
				createdAt: {
					bsonType: "date",
					description: "Дата створення, обов'язкове поле",
				},
				updatedAt: {
					bsonType: "date",
					description: "Дата оновлення, обов'язкове поле",
				},
			},
		},
	},
});

db.CarModels.insertMany([
	{
		brandId: db.CarBrands.findOne({ title: "Toyota" })._id,
		title: "Corolla",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		brandId: db.CarBrands.findOne({ title: "BMW" })._id,
		title: "X5",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		brandId: db.CarBrands.findOne({ title: "Mercedes" })._id,
		title: "C-Class",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		brandId: db.CarBrands.findOne({ title: "Audi" })._id,
		title: "A4",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		brandId: db.CarBrands.findOne({ title: "Tesla" })._id,
		title: "Model 3",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
]);

db.createCollection("Cars", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: [
				"userId",
				"brandId",
				"modelId",
				"mileage",
				"initialMileage",
				"yearOfManufacture",
				"createdAt",
				"updatedAt",
			],
			properties: {
				userId: {
					bsonType: "objectId",
					description: "Посилання на користувача Users id",
				},
				brandId: {
					bsonType: "objectId",
					description: "Посилання на бренд автомобіля CarBrands id",
				},
				modelId: {
					bsonType: "objectId",
					description: "Посилання на модель автомобіля CarModels id)",
				},
				mileage: {
					bsonType: "number",
					description: "Поточний пробіг автомобіля, обов'язкове поле",
				},
				initialMileage: {
					bsonType: "number",
					description:
						"Пробіг автомобіля на момент додавання, обов'язкове поле",
				},
				yearOfManufacture: {
					bsonType: "date",
					description: "Дата випуску автомобіля, обов'язкове поле",
				},
				createdAt: {
					bsonType: "date",
					description: "Дата створення запису в БД, обов'язкове поле",
				},
				updatedAt: {
					bsonType: "date",
					description: "Дата оновлення запису в БД, обов'язкове поле",
				},
			},
		},
	},
});

db.Cars.insertMany([
	{
		userId: db.Users.findOne({ email: "ivan@example.com" })._id,
		brandId: db.CarBrands.findOne({ title: "Toyota" })._id,
		modelId: db.CarModels.findOne({ title: "Corolla" })._id,
		mileage: 120000,
		initialMileage: 10000,
		yearOfManufacture: new Date("2015-04-01"),
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		userId: db.Users.findOne({ email: "anna@example.com" })._id,
		brandId: db.CarBrands.findOne({ title: "BMW" })._id,
		modelId: db.CarModels.findOne({ title: "X5" })._id,
		mileage: 80000,
		initialMileage: 5000,
		yearOfManufacture: new Date("2018-06-10"),
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		userId: db.Users.findOne({ email: "oleg@example.com" })._id,
		brandId: db.CarBrands.findOne({ title: "Mercedes" })._id,
		modelId: db.CarModels.findOne({ title: "C-Class" })._id,
		mileage: 60000,
		initialMileage: 15000,
		yearOfManufacture: new Date("2017-09-12"),
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		userId: db.Users.findOne({ email: "katya@example.com" })._id,
		brandId: db.CarBrands.findOne({ title: "Audi" })._id,
		modelId: db.CarModels.findOne({ title: "A4" })._id,
		mileage: 40000,
		initialMileage: 2000,
		yearOfManufacture: new Date("2019-03-22"),
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		userId: db.Users.findOne({ email: "maria@example.com" })._id,
		brandId: db.CarBrands.findOne({ title: "Tesla" })._id,
		modelId: db.CarModels.findOne({ title: "Model 3" })._id,
		mileage: 25000,
		initialMileage: 0,
		yearOfManufacture: new Date("2021-11-01"),
		createdAt: new Date(),
		updatedAt: new Date(),
	},
]);
