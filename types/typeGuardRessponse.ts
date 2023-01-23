interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}

type f = (res: IResponseSuccess | IResponseFailed) => number;

type Res = IResponseSuccess | IResponseFailed;

function isResponseSuccess(x: Res): x is IResponseSuccess {
    return x.status === PaymentStatus.Success;
}

function isResponseFailed(x: Res): x is IResponseFailed {
    return x.status === PaymentStatus.Failed;
}

function getIdFromData(res: Res): number {
    if (isResponseSuccess(res)) {
        return res.data.databaseId;
    } else if (isResponseFailed(res)) {
        throw new Error(res.data.errorMessage);
    } else {
        throw new Error('Неизвестный тип ответа');
    }
}
