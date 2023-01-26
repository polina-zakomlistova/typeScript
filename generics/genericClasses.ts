{
    class Resp<D, E> {
        data?: D;
        error?: E;

        constructor(data?: D, error?: E) {
            if (data) {
                this.data = data;
            }

            if (error) {
                this.error = error;
            }
        }
    }

    const res = new Resp('data', 0);
    const res2 = new Resp('data');
    res2.error; //unkmown
    const res3 = new Resp<string, number>('data', 0);
    const res4 = new Resp<string, number>('data');
    res4.error; //number or undefined

    class HTTPResp<F> extends Resp<string, number> {
        code: F;

        setCode(code: F) {
            this.code = code;
        }
    }

    const httpResp = new HTTPResp();
}
