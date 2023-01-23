{
    //перечисление
    enum StatusCode {
        SUCCESS = 1,
        IN_PROCESS = 'p',
        FAILED = 3,
    }
    const res = {
        message: 'Платеж успешен',
        statusCode: StatusCode.SUCCESS,
    };

    if (res.statusCode === StatusCode.SUCCESS) {
        console.log('Успешно!');
    }

    function action(ststus: StatusCode) {}
    //по умолчанию числой
    action(StatusCode.SUCCESS);
    action(1);

    function compute() {
        return 3;
    }

    enum Roles {
        ADMIN = 1,
        USER = compute(),
    }

    function test(x: { ADMIN: number }) {}
    test(Roles);

    const enum RolesConst {
        ADMIN = 1,
        USER = 2,
    }

    const res2 = RolesConst.ADMIN;
}
