{
    interface ILogger {
        log(...args: any): void;
        error(...args: any): void;
    }

    class Logger implements ILogger {
        log(...args: any[]): void {
            console.log(...args);
        }
        error(...args: any[]): void {
            //кинуть во внешнюю систему
            console.log(...args);
        }
    }

    interface IPayable {
        pay(paymentId: number): void;
        price?: number;
    }

    interface IDeleteable {
        delete(): void;
    }

    class User implements IPayable, IDeleteable {
        delete(): void {
            throw new Error('Method not implemented.');
        }

        pay(paymentId: number | string): void {
            ////
        }
    }
}
