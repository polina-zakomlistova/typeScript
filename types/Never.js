"use strict";
{
    function generateError(message) {
        throw new Error();
    }
    function dumpError() {
        while (true) { }
    }
    function rec() {
        return rec();
    }
    function processAction(action) {
        switch (action) {
            case "refund":
                //....
                break;
            case "checkout":
                //...
                break;
            case "reject":
                //...
                break;
            default: //проверка что 'reject' не выпадет в ошибку, что для него необходимо создать case
                //!!!!!!!!!!!!!!!!!!!!!!!!!!
                const _ = action;
                throw new Error("нет такого действия");
        }
    }
    function isString(x) {
        if (typeof x === "string") {
            return true;
        }
        else if (typeof x === "number") {
            return false;
        }
        generateError("fpffppf"); // заглушка на случай underfind, когда не попал в if, never в функции скажет, что ничего не возвращается
    }
}
