function delay(f, ms) {
    function ret(...args) {
        setTimeout(()=>f.apply(this, args), ms);
    }

    return ret;
}