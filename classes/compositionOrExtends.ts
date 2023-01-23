{
	class User {
		name: string;

		constructor(name: string) {
			this.name = name;
		}
	}
	//такая реализация неправильная, нам не нужны все методы массива,
	// тем более их нужно переопределять, но лишние с неправильной логикой останется
	class Users extends Array<User> {
		searchByName(name: string) {
			return this.filter((u) => u.name === name);
		}

		override toString(): string {
			return this.map((u) => u.name).join(", ");
		}
	}

	const users = new Users();
	users.push(new User("Polina"));
	users.toString();

	//Это композиция, мы делаем имитацию знакомых методов
	class UserList {
		users: User[];

		push(u: User) {
			this.users.push(u);
		}
	}

	class Payment {
		date: Date;
	}
	//преходим на другую предметную область. Неправильно!!
	class UserWithPayment extends Payment {
		name: string;
	}
	//тут разграничены механизмы
	class UserWithPayment2 {
		user: User;
		payment: Payment;

		constructor(user: User, payment: Payment) {
			this.payment = payment;
			this.user = user;
		}
	}
}
