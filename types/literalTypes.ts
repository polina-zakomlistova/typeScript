function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
    return 1;
}

fetchWithAuth('s', 'post');

//подобно константе
let a: 1 = 1;

let method = 'fgfgfgfg';

fetchWithAuth('s', method as 'post'); //использвоать с аккуратностью, можно передать что-то другое
