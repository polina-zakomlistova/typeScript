{
	interface User {
		name: string;
	}

	interface User {
		age: number;
	}

	const user: User = {
		name: "as",
		age: 33,
	};

	//type хорошо работает с простыми типами, interface же с обектами, и уже внутри него могут быть свойства с простыми типами
	type ID = string | number;
	interface IDI {
		ID: string | number;
	}
}
