"use strict";
{
    class Logger {
        log(...args) {
            console.log(...args);
        }
        error(...args) {
            //кинуть во внешнюю систему
            console.log(...args);
        }
    }
    class User {
        delete() {
            throw new Error("Method not implemented.");
        }
        pay(paymentId) {
            ////
        }
    }
}
