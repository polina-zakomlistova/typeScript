"use strict";
{
    class Payment {
        constructor(id) {
            this.status = "new";
            this.id = id;
        }
        pay() {
            this.status = "paid";
        }
    }
    class PersistedPayment extends Payment {
        constructor() {
            const id = Math.random();
            super(id);
        }
        save() { }
        //для безопасности override, ругнется, если не будет в родительском классе такого метода,
        //и не нужно использовать super.pay(), чтобы выполнялся механизм родительского
        pay(date) {
            if (date) {
                this.paidAt = date;
            }
        }
    }
    const pay = new PersistedPayment();
    pay.pay(new Date());
    pay.databaeId = 0;
    class User {
        constructor() {
            this.name = "User";
            console.log(this.name);
        }
    }
    class Admin extends User {
        constructor() {
            super();
            this.name = "admin";
            console.log(this.name);
        }
    }
    new Admin();
    class HttpError extends Error {
        constructor(message, code) {
            var _a;
            super(message);
            (_a = this.code === code) !== null && _a !== void 0 ? _a : 500;
        }
    }
}
