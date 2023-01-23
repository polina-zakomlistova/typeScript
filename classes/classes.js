"use strict";
{
    class User {
        constructor(name) {
            this.name = name;
        }
    }
    const user = new User('Polina');
    console.log(user.name);
    user.name = 'Igor';
    console.log(user.name);
    class Admin {
    }
    const admin = new Admin();
    admin.role = 1;
}
