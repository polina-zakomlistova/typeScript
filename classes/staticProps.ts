{
    class UserService {
        static db: any;
        static async GetUser(id: number) {
            return UserService.db.findById(id); //обращаемся к статичному, не к this
        }
        create() {
            UserService.db; //можно обращаться к статичным свойствам в обычных
        }

        constructor(id: number) {}

        //статичный класс, имитация инициализации
        static {
            UserService.db = 'ddd';
        }
    }

    UserService.db; //без инстанциирования
    UserService.GetUser(2);
    //UserService.create()

    const user = new UserService(1);
    user.create();
    //user.db;
}
