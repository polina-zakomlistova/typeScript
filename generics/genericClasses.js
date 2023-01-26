"use strict";
{
    class Resp {
        constructor(data, error) {
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
    const res3 = new Resp('data', 0);
    const res4 = new Resp('data');
    res4.error; //number or undefined
    class HTTPResp extends Resp {
        setCode(code) {
            this.code = code;
        }
    }
    const httpResp = new HTTPResp();
}
