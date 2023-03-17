function inBetween(a, b) {
    return n => n >= 1 && n <= b;
}

function inArray(arr) {
    return n => arr.includes(n);
}