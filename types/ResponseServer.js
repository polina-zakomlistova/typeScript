"use strict";
{
    let PaymentStatus;
    (function (PaymentStatus) {
        PaymentStatus["success"] = "success";
        PaymentStatus["failed"] = "failed";
    })(PaymentStatus || (PaymentStatus = {}));
    const request = {
        sum: 10000,
        from: 2,
        to: 4,
    };
    const answerSuccess = {
        status: PaymentStatus.success,
        data: {
            databaseId: 567,
            sum: 10000,
            from: 2,
            to: 4,
        },
    };
    const answerFailed = {
        status: PaymentStatus.failed,
        data: {
            errorMessage: "Недостаточно средств",
            errorCode: 4,
        },
    };
}
