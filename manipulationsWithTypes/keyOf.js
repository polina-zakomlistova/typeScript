"use strict";
{
    const key = 'age';
    function getValue(obj, key) {
        return obj[key];
    }
    const user = {
        name: 'Вася',
        age: 30,
    };
    const userName = getValue(user, 'name');
}
