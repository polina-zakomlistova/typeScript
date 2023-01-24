"use strict";
{
    const user = {
        login: "a@.ru",
        password: "1",
    };
    function multyply(first, second) {
        if (!second) {
            return first * first;
        }
        return first * second;
    }
    function testPass(user) {
        var _a;
        const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
    }
    //точно уверен, что будет password, не рекомендуется использовать
    function testPass2(user) {
        const t = user.password.type;
    }
    function test(param) {
        const t = param !== null && param !== void 0 ? param : multyply(5);
    }
}
