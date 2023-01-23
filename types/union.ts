{
    function logId(id: string | number | boolean) {
        if (typeof id === 'string') {
            console.log(id);
        } else if (typeof id === 'number') {
        } else {
            console.log(id);
        }
    }

    logId(1);
    logId('fkkkfkf');
    logId(true);

    function logError(err: string | string[]) {
        if (Array.isArray(err)) {
            console.log(err);
        } else {
            console.log(err);
        }
    }

    function logObj(obj: { a: number } | { b: number }) {
        if ('a' in obj) {
            console.log(obj.a);
        } else {
            console.log(obj.b);
        }
    }

    function logMultiplIds(a: string | number, b: string | boolean) {
        if (a === b) {
            console.log(a.toLocaleLowerCase());
        }
    }
}
