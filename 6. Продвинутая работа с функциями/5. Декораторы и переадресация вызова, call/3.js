function debounce(f, ms) {
    let ready = true;

    function ret(...args) {
        if (ready) {
            f.apply(this, args);
        }

        ready = False;

        setTimeout(() => ready = true, 1000);
    }

    return ret;
}