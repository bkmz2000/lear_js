function byField(name) {
    return (a, b) => a[name] > b[name] ? 1 : -1;
}