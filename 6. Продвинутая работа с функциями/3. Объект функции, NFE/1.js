function sum(a) {
    let curr = a;

    function f(n) {
        curr += n;
        return f;
    }

    f.toString = function () {
        return curr;
    };

    return f;
}
