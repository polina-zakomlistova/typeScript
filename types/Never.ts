{
	function generateError(message: string): never {
		throw new Error();
	}

	function dumpError(): never {
		while (true) {}
	}

	function rec(): never {
		return rec();
	}

	type paymentAction = "refund" | "checkout" | "reject";

	function processAction(action: paymentAction) {
		switch (action) {
			case "refund":
				//....
				break;
			case "checkout":
				//...
				break;
			case "reject":
				//...
				break;
			default: //проверка что 'reject' не выпадет в ошибку, что для него необходимо создать case
				//!!!!!!!!!!!!!!!!!!!!!!!!!!
				const _: never = action;

				throw new Error("нет такого действия");
		}
	}

	function isString(x: string | number): boolean {
		if (typeof x === "string") {
			return true;
		} else if (typeof x === "number") {
			return false;
		}
		generateError("fpffppf"); // заглушка на случай underfind, когда не попал в if, never в функции скажет, что ничего не возвращается
	}
}
