function spy(func) {
    function ret(...args) {
        calls.push(args);
        func.apply(this, args);
    }

    ret.calls = [];

    return ret;
}