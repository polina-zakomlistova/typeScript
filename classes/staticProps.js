"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    class UserService {
        static GetUser(id) {
            return __awaiter(this, void 0, void 0, function* () {
                return UserService.db.findById(id); //обращаемся к статичному, не к this
            });
        }
        create() {
            UserService.db; //можно обращаться к статичным свойствам в обычных
        }
        constructor(id) { }
    }
    //статичный класс, имитация инициализации
    (() => {
        UserService.db = 'ddd';
    })();
    UserService.db; //без инстанциирования
    UserService.GetUser(2);
    //UserService.create()
    const user = new UserService(1);
    user.create();
    //user.db;
}
