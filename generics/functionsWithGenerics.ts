{
    // необходимость передавать разные типы
    function logMiddleware<T>(data: T): T {
        console.log(data);
        return data;
    }

    const res = logMiddleware(10);
    const res2 = logMiddleware('10'); //тип как константа
    const res3 = logMiddleware<number>(10); //обозначем какой тип передаем

    function getSplitedHalf<T>(data: Array<T>): Array<T> {
        const length = data.length / 2;
        return data.slice(0, length);
    }

    getSplitedHalf([1, 2, 3, 4]);
    getSplitedHalf([1, 2, 'str']);
}
