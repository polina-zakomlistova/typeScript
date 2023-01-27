"use strict";
{
    const user = {
        name: 'Вася',
        roles: [],
        permission: {
            endDate: new Date(),
        },
    };
    const nameUser = user['name'];
    const roleNames = 'roles';
    //union-type
    const roles = ['admin', 'user', 'super-user']; //так станет readonly, поэтому можно будет преобраховать в типы
}
