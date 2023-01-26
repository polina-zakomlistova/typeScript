{
    function toString<T>(data: T): string | undefined {
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
                return undefined;
        }
    }

    console.log(toString(3));
    console.log(toString('str'));
    console.log(toString({ a: 0 }));
}
