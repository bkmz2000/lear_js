function fib(n) {
    let phi = (1 + Math.sqrt(5)) / 2;

    let res = (Math.pow(phi, n) - Math.pow(1 - phi, n)) / (2 * phi - 1);

    return res;
}

for (let i = 0; i < 100; ++i) {
    console.log(fib(i));
}