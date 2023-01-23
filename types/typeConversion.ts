{
	let a = 5;
	let b: string = a.toString();
	let c = "fpfpfpfp";
	let d: number = parseInt(c);
	let e = new String(a); //конструктор типа строка, но не простой тип string
	let eStr = new String(a).valueOf(); //так будет просто string

	interface User {
		name: string;
		email: string;
		login: string;
	}

	const user: User = {
		name: "Polina",
		email: "p@mail.ru",
		login: "polina",
	};

	const user2 = {
		name: "Polina",
		email: "p@mail.ru",
		login: "polina",
	} as User;

	interface Admin {
		name: string;
		role: number;
	}

	const admin: Admin = { ...user, role: 1 }; //На самом деле сохранится еще свойство email, login от user, хотя явно не видно, но под капотом да

	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	function userToAdmin(user: User): Admin {
		return {
			name: user.name,
			role: 1,
		};
	}
}
