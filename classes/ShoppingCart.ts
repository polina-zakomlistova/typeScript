/*Необходимо сделать корзину (Cart) на сайте,
которая имееет список продуктов (Product), добавленных в корзину
и переметры доставки (Delivery). Для Cart реализовать методы:
- Добавить продукт в корзину
- Удалить продукт из корзины по ID
- Посчитать стоимость товаров в корзине
- Задать доставку
- Checkout - вернуть что всё ок, если есть продукты и параметры доставки
Product: id, название и цена
Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)*/
{
    class Product {
        constructor(
            public id: number,
            public name: string,
            public price: number
        ) {}
    }
    //TO DO

    class Delivery {
        constructor(public date: Date) {}
    }
    class HomeDelivery extends Delivery {
        constructor(date: Date, public address: string) {
            super(date);
        }
    }

    class ShopDelivery extends Delivery {
        constructor(public idShop: number) {
            super(new Date());
        }
    }

    type DeliveryOption = HomeDelivery | ShopDelivery;

    class Cart {
        private products: Product[] = [];
        private delivery: DeliveryOption;

        public addProduct(product: Product): void {
            this.products.push(product);
        }

        public deleteProducById(id: number): void {
            this.products = this.products.filter((p: Product) => p.id !== id);
        }

        public getTotalPrice(): number {
            return this.products
                .map((product) => product.price)
                .reduce((p1: number, p2: number) => p1 + p2);
        }

        public setDelivery(delivery: DeliveryOption): void {
            this.delivery = delivery;
        }

        public checkOut() {
            if (this.products.length === 0) {
                throw new Error('Нет ни одного товара в корзине');
            }
            if (!this.delivery) {
                throw new Error('Не указана доставка');
            }

            return { success: true };
        }
    }

    const cart = new Cart();
    cart.addProduct(new Product(1, 'cake', 100));
    cart.addProduct(new Product(2, 'spice', 20));
    cart.addProduct(new Product(3, 'bread', 30));
    console.log(cart);
    console.log(cart.getTotalPrice());
    cart.deleteProducById(1);
    console.log(cart);
    //cart.setDelivery(new HomeDelivery(new Date(), 'street 1, 5'));
    console.log(cart);
    console.log(cart.getTotalPrice());
    console.log(cart.checkOut());
}
