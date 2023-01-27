"use strict";
{
    const a = Math.random() > 0.5 ? 1 : 0;
    const suc = {
        code: 200,
        data: 'done',
    };
    const err = {
        code: 200,
        data: new Error(),
    };
    class User {
    }
    class UserPersistend extends User {
    }
    function getUser(dbIdOrId) {
        if (typeof dbIdOrId === 'number') {
            return new User();
        }
        else {
            return new UserPersistend();
        }
    }
    function getUser2(id) {
        if (typeof id === 'number') {
            return new User();
        }
        else {
            return new UserPersistend();
        }
    }
    const res = getUser2(1);
    const res2 = getUser2('str');
}
