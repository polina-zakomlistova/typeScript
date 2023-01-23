"use strict";
{
    //перечисление
    let StatusCode;
    (function (StatusCode) {
        StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
        StatusCode["IN_PROCESS"] = "p";
        StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
    })(StatusCode || (StatusCode = {}));
    const res = {
        message: 'Платеж успешен',
        statusCode: StatusCode.SUCCESS,
    };
    if (res.statusCode === StatusCode.SUCCESS) {
        console.log('Успешно!');
    }
    function action(ststus) { }
    //по умолчанию числой
    action(StatusCode.SUCCESS);
    action(1);
    function compute() {
        return 3;
    }
    let Roles;
    (function (Roles) {
        Roles[Roles["ADMIN"] = 1] = "ADMIN";
        Roles[Roles["USER"] = compute()] = "USER";
    })(Roles || (Roles = {}));
    function test(x) { }
    test(Roles);
    const res2 = 1 /* RolesConst.ADMIN */;
}
