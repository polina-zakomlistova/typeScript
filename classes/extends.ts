{
	type PaymentStatus = "new" | "paid";
	class Payment {
		id: number;
		status: PaymentStatus = "new";

		constructor(id: number) {
			this.id = id;
		}

		pay() {
			this.status = "paid";
		}
	}

	class PersistedPayment extends Payment {
		databaeId: number;
		paidAt: Date;

		constructor() {
			const id = Math.random();
			super(id);
		}

		save() {}
		//для безопасности override, ругнется, если не будет в родительском классе такого метода,
		//и не нужно использовать super.pay(), чтобы выполнялся механизм родительского
		override pay(date?: Date) {
			if (date) {
				this.paidAt = date;
			}
		}
	}

	const pay = new PersistedPayment();
	pay.pay(new Date());
	pay.databaeId = 0;

	class User {
		name: string = "User";

		constructor() {
			console.log(this.name);
		}
	}

	class Admin extends User {
		name: string = "admin";
		constructor() {
			super();
			console.log(this.name);
		}
	}

	new Admin();

	class HttpError extends Error {
		code: number;
		constructor(message: string, code?: number) {
			super(message);
			this.code === code ?? 500;
		}
	}
}
