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
    class User {
        set login(l) {
            this._login = "user-" + l;
            this.createdAt = new Date();
        }
        get login() {
            return this._login;
        }
        /*set password(p: string) {
            //sync,что останавливает основной поток js, не рекомендуется, нужно использовать методы
        }*/
        getPassword(p) {
            return __awaiter(this, void 0, void 0, function* () {
                this.password = p; //И используем асинхронные бибилиотеки для шифрования
            });
        }
    }
    const user = new User();
    user.login = "Polina";
    console.log(user);
}
