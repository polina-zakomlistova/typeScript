"use strict";
{
    class User {
        constructor(name) {
            this.name = name;
        }
    }
    //такая реализация неправильная, нам не нужны все методы массива,
    // тем более их нужно переопределять, но лишние с неправильной логикой останется
    class Users extends Array {
        searchByName(name) {
            return this.filter((u) => u.name === name);
        }
        toString() {
            return this.map((u) => u.name).join(", ");
        }
    }
    const users = new Users();
    users.push(new User("Polina"));
    users.toString();
    //Это композиция, мы делаем имитацию знакомых методов
    class UserList {
        push(u) {
            this.users.push(u);
        }
    }
    class Payment {
    }
    //преходим на другую предметную область. Неправильно!!
    class UserWithPayment extends Payment {
    }
    //тут разграничены механизмы
    class UserWithPayment2 {
        constructor(user, payment) {
            this.payment = payment;
            this.user = user;
        }
    }
}
