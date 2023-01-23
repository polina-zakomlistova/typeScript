"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function isResponseSuccess(x) {
    return x.status === PaymentStatus.Success;
}
function isResponseFailed(x) {
    return x.status === PaymentStatus.Failed;
}
function getIdFromData(res) {
    if (isResponseSuccess(res)) {
        return res.data.databaseId;
    }
    else if (isResponseFailed(res)) {
        throw new Error(res.data.errorMessage);
    }
    else {
        throw new Error('Неизвестный тип ответа');
    }
}
