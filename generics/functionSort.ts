{
    const data = [
        { id: 0, name: 'Вася' },
        { id: 2, name: 'Петя' },
        { id: 1, name: 'Коля' },
        { id: 3, name: 'Аня' },
    ];

    interface ID {
        id: number;
    }

    function sort<T extends ID>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
        return data.sort((a, b) => {
            switch (type) {
                case 'asc':
                    return a.id - b.id;
                case 'desc':
                    return b.id - a.id;
            }
        });
    }

    console.log(data);

    console.log(sort(data));

    console.log(sort(data, 'desc'));
}
