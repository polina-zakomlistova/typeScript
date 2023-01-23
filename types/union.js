"use strict";
{
    function logId(id) {
        if (typeof id === 'string') {
            console.log(id);
        }
        else if (typeof id === 'number') {
        }
        else {
            console.log(id);
        }
    }
    logId(1);
    logId('fkkkfkf');
    logId(true);
    function logError(err) {
        if (Array.isArray(err)) {
            console.log(err);
        }
        else {
            console.log(err);
        }
    }
    function logObj(obj) {
        if ('a' in obj) {
            console.log(obj.a);
        }
        else {
            console.log(obj.b);
        }
    }
    function logMultiplIds(a, b) {
        if (a === b) {
            console.log(a.toLocaleLowerCase());
        }
    }
}
