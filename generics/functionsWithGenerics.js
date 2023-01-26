"use strict";
{
    // необходимость передавать разные типы
    function logMiddleware(data) {
        console.log(data);
        return data;
    }
    const res = logMiddleware(10);
    const res2 = logMiddleware('10'); //тип как константа
    const res3 = logMiddleware(10); //обозначем какой тип передаем
    function getSplitedHalf(data) {
        const length = data.length / 2;
        return data.slice(0, length);
    }
    getSplitedHalf([1, 2, 3, 4]);
    getSplitedHalf([1, 2, 'str']);
}
