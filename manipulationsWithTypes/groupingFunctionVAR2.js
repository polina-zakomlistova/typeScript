"use strict";
//Выполнение преподавателя:
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
    function group(data, key) {
        return data.reduce((map, item) => {
            const itemKey = item[key];
            let curEl = map[itemKey];
            if (Array.isArray(curEl)) {
                curEl.push(item);
            }
            else {
                curEl = [item];
            }
            map[itemKey] = curEl;
            return map;
        }, {});
    }
    const res = group(data, 'group');
    console.log(res);
}
