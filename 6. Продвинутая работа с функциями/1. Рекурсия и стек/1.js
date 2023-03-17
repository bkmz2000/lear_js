function sumTo(n) {
    let res = 0;
    for (let i = 1; i <= n; ++i) {
        res += i;
    }

    return res;
}

function sumTo(n) {
    if (n < 2) {
        return 1;
    }

    return sumTo(n - 1) + n;
}

let sumTo = n => n * (n + 1) / 2;