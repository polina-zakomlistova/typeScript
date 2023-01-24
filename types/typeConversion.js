"use strict";
{
    let a = 5;
    let b = a.toString();
    let c = "fpfpfpfp";
    let d = parseInt(c);
    let e = new String(a); //конструктор типа строка, но не простой тип string
    let eStr = new String(a).valueOf(); //так будет просто string
    const user = {
        name: "Polina",
        email: "p@mail.ru",
        login: "polina",
    };
    const user2 = {
        name: "Polina",
        email: "p@mail.ru",
        login: "polina",
    };
    const admin = Object.assign(Object.assign({}, user), { role: 1 }); //На самом деле сохранится еще свойство email, login от user, хотя явно не видно, но под капотом да
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    function userToAdmin(user) {
        return {
            name: user.name,
            role: 1,
        };
    }
}
