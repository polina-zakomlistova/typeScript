{
    class User {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }

    const user = new User('Polina');

    console.log(user.name);
    user.name = 'Igor';
    console.log(user.name);

    class Admin {
        role: number;
    }

    const admin = new Admin();
    admin.role = 1;
}
