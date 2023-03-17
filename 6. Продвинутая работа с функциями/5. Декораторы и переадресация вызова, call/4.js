function debounce(f, ms) {
    let ready = true;
    let lastArg = [];

    function ret(...args) {
        lastArg = args;

        if (ready) {
            f.apply(this, args);
        }

        ready = False;

        setTimeout(() => {
            ready = true;
            f.apply(this, lastArg);
        }, 1000);
    }

    return ret;
}