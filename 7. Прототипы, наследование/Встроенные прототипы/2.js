Function.prototype.defer = function (ms) {
    return function (...args) {
        setInterval(this.apply(this, args), ms);
    }
}