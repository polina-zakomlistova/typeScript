{
    class Payment {
        private date: Date = new Date();
        //важено не потерять контекст
        getDate(this: Payment) {
            return this.date;
        }
        //стрелочная функция привязана к контексту
        getDateArrow = () => {
            return this.date;
        };
    }

    const p = new Payment();
    const user = {
        id: 1,
        paymentDate: p.getDate.bind(p),
        paymentDateArrow: p.getDateArrow,
    };
    console.log(p.getDate());
    console.log(user.paymentDate());
    console.log(user.paymentDateArrow());

    class PaymentPersistent extends Payment {
        save() {
            return super.getDate(); //работает
            //return super.paymentDateArrow(); - ошибка, стрелочной функции не будет в прототипе
            //return this.paymentDateArrow(); - работает, ибо уже берем отнаследованную функцию
        }
    }

    console.log(new PaymentPersistent().save());
}
