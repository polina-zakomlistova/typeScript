{
	let input: unknown;
	input = 3;
	input = [1, 2, 3];
	//let res: string = input; ///отличие от any, нельзя без приведения типа, он более строгий. Тут должен быть тип или unknown или any

	function run(i: unknown) {
		if (typeof i == "number") {
			i++;
		} else {
			i; //тип остался unknown
		}
	}

	run(input);

	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	async function getData() {
		try {
			await fetch("");
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			}
		}
	}

	async function getDataForce() {
		try {
			await fetch("");
		} catch (error) {
			const e = error as Error; //не рекомендуется, вдруг ошибка придет не типа ошибка,а строкой или тп
			console.log(error.message);
		}
	}

	type U1 = unknown | null; //любые типы с unknown будут им же, ибо он более широкий
	type I1 = unknown | string; //берет более узкий тип
}
