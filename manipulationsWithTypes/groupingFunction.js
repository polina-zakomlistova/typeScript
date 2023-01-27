"use strict";
// Необходимо написать функцию группировки, которая принимает массив объектов
// и его ключ, производит группировку по указанному ключу и возращает
// сгруппированный объект.
// Пример:
// [
// 	{ group: 1, name: 'a' },
// 	{ group: 1, name: 'b' },
// 	{ group: 2, name: 'c' },
// ];
// При группироке по 'group' ---->
// {
// 	'1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
// 	'2': [ { group: 2, name: 'c' } ]
// }
{
    const data = [
        { group: 1, name: 'a', rasp: { a: 1 } },
        { group: 1, name: 'b', rasp: { a: 1 } },
        { group: 2, name: 'c', rasp: { a: 2 } },
    ];
    console.log(group(data, 'group'));
    console.log(group(data, 'name'));
    console.log(group(data, 'rasp'));
    function group(data, key) {
        const res = {};
        data.forEach((element) => {
            //значение свойства для установки ключа
            const valueProp = element[key];
            //для значения ключа переодим в строку
            const stringProp = toString(valueProp);
            //новый массив, если такого свойства нет или существующий
            res[stringProp] = res[stringProp] || [];
            res[stringProp].push(element);
        });
        return res;
    }
    function toString(data) {
        if (Array.isArray(data)) {
            return data.toString();
        }
        switch (typeof data) {
            case 'string':
                return data;
            case 'number':
            case 'symbol':
            case 'boolean':
            case 'bigint':
            case 'function':
                return data.toString();
            case 'object':
                return JSON.stringify(data);
            default:
                return '';
        }
    }
}
