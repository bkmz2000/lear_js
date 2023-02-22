function pow(x, p) {
    let ret = 1;
    for(let i=0; i<p; ++i) {
        ret *= x;
    }

    return ret;
}