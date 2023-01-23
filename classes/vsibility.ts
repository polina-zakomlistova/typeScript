{
	class Vehicle {
		public make: string;
		//приваное только в TS
		private damages: String[];
		private _model: string;

		protected run: number;

		//как в JS приватное, полностью
		#price: number;

		set model(m: string) {
			this._model = m;
			this.#price = 300;
		}

		get model() {
			return this._model;
		}
		addDamage(damage: string) {
			this.damages.push(damage);
		}

		isPriceEqual(v: Vehicle) {
			return this.#price === v.#price;
		}
	}

	class EuroTrack extends Vehicle {
		setDamage() {
			//можем модифицировать только публичные
			//this.damages
		}
		setRun(km: number) {
			//можем модифицировать защиненные
			this.run = km / 0.62; //в милях;
		}
	}

	new Vehicle().make = "d";
	//нет ни приватных, ни защищенных свойств
}
