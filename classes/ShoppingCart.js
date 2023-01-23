"use strict";
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
        constructor(id, name, price) {
            this.id = id;
            this.name = name;
            this.price = price;
        }
    }
    //TO DO
    class Delivery {
        constructor(date) {
            this.date = date;
        }
    }
    class HomeDelivery extends Delivery {
        constructor(date, address) {
            super(date);
            this.address = address;
        }
    }
    class ShopDelivery extends Delivery {
        constructor(idShop) {
            super(new Date());
            this.idShop = idShop;
        }
    }
    class Cart {
        constructor() {
            this.products = [];
        }
        addProduct(product) {
            this.products.push(product);
        }
        deleteProducById(id) {
            this.products = this.products.filter((p) => p.id !== id);
        }
        getTotalPrice() {
            return this.products
                .map((product) => product.price)
                .reduce((p1, p2) => p1 + p2);
        }
        setDelivery(delivery) {
            this.delivery = delivery;
        }
        checkOut() {
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
