function filterRange(arr, a, b) {
    let ret = [];

    for (let it of arr) {
        if(it >= a && it <= b) {
            ret.push(it);
        }
    }

    return ret;
}
