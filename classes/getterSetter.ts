{
	class User {
		_login: string;
		password: string;
		createdAt: Date;

		set login(l: string | number) {
			this._login = "user-" + l;
			this.createdAt = new Date();
		}

		get login() {
			return this._login;
		}

		/*set password(p: string) {
			//sync,что останавливает основной поток js, не рекомендуется, нужно использовать методы
		}*/

		async getPassword(p: string) {
			this.password = p; //И используем асинхронные бибилиотеки для шифрования
		}
	}

	const user = new User();
	user.login = "Polina";
	console.log(user);
}
