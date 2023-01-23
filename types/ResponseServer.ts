{
	interface IPayment {
		sum: number;
		from: number;
		to: number;
	}

	interface IPaymentRequest extends IPayment {}

	interface DataPaymentSuccess extends IPayment {
		databaseId: number;
	}

	interface DataPaymentFailed {
		errorMessage: string;
		errorCode: number;
	}

	enum PaymentStatus {
		success = "success",
		failed = "failed",
	}

	interface IPaymentResponseSuccess {
		status: PaymentStatus.success;
		data: DataPaymentSuccess;
	}
	interface IPaymentResponseFailed {
		status: PaymentStatus.failed;
		data: DataPaymentFailed;
	}

	const request: IPaymentRequest = {
		sum: 10000,
		from: 2,
		to: 4,
	};

	const answerSuccess: IPaymentResponseSuccess = {
		status: PaymentStatus.success,
		data: {
			databaseId: 567,
			sum: 10000,
			from: 2,
			to: 4,
		},
	};

	const answerFailed: IPaymentResponseFailed = {
		status: PaymentStatus.failed,
		data: {
			errorMessage: "Недостаточно средств",
			errorCode: 4,
		},
	};
}
