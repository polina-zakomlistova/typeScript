{
    type httpMethod = 'post' | 'get';

    function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
        return 1;
    }

    type User = {
        name: string;
        age: number;
        skills: string[];
    };

    type Role = {
        id: number;
    };

    type UserWithRole = User & Role;

    const user: UserWithRole = {
        name: 'Polina',
        age: 24,
        skills: ['1', '2'],
        id: 1,
    };
}
