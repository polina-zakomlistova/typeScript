"use strict";
{
    let PaymentStatus;
    (function (PaymentStatus) {
        PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
        PaymentStatus[PaymentStatus["Processed"] = 1] = "Processed";
        PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed";
    })(PaymentStatus || (PaymentStatus = {}));
    class Payment {
        constructor(id) {
            this.id = id;
            this.createdAt = new Date();
            this.status = PaymentStatus.Holded;
        }
        getPaymentLifeTime() {
            return new Date().getTime() - this.createdAt.getTime();
        }
        unholdPayment() {
            if (this.status === PaymentStatus.Processed) {
                throw new Error('Платеж не может быть возвращен');
            }
            this.status = PaymentStatus.Reversed;
            this.updatedAt = new Date();
        }
    }
    const payment = new Payment(0);
    const time = payment.getPaymentLifeTime();
    payment.status = PaymentStatus.Holded;
    payment.unholdPayment();
    console.log(payment);
    console.log(time);
}
