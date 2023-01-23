{
	interface User {
		login: string;
		password?: string;
	}

	const user: User = {
		login: "a@.ru",
		password: "1",
	};

	function multyply(first: number, second?: number): number {
		if (!second) {
			return first * first;
		}
		return first * second;
	}

	interface UserPro {
		login: string;
		password?: {
			type: "primary" | "secondary";
		};
	}

	function testPass(user: UserPro) {
		const t = user.password?.type;
	}
	//точно уверен, что будет password, не рекомендуется использовать
	function testPass2(user: UserPro) {
		const t = user.password!.type;
	}

	function test(param?: string) {
		const t = param ?? multyply(5);
	}
}
