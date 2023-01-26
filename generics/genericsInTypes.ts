{
    function getSplitedHalf<T>(data: Array<T>): Array<T> {
        const length = data.length / 2;
        return data.slice(0, length);
    }

    const split: <T>(data: Array<T>) => Array<T> = getSplitedHalf;
    const split2: <Y>(data: Array<Y>) => Array<Y> = getSplitedHalf;

    interface ILogLine<T> {
        timeStamp: Date;
        data: T;
    }
    const logLine: ILogLine<{ a: number }> = {
        timeStamp: new Date(),
        data: {
            a: 1,
        },
    };

    type LogLineType<T> = {
        timeStamp: Date;
        data: T;
    };
}
