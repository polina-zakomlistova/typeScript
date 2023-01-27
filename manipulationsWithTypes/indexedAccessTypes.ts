{
    interface Role {
        name: string;
    }

    interface Permission {
        endDate: Date;
    }

    interface User {
        name: string;
        roles: Role[];
        permission: Permission;
    }

    const user: User = {
        name: 'Вася',
        roles: [],
        permission: {
            endDate: new Date(),
        },
    };

    const nameUser = user['name'];

    type rolesType = User['roles'];
    type dateType = User['permission']['endDate'];

    const roleNames = 'roles';
    // type roleType = User[roleNames];
    type rolesType2 = User[typeof roleNames]; //но только если константа

    ///

    type roleType = User['roles'][number];

    //union-type
    const roles = ['admin', 'user', 'super-user'] as const; //так станет readonly, поэтому можно будет преобраховать в типы
    type roleTypes = typeof roles[number];
}
