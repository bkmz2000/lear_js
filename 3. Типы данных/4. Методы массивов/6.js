function Calculator () {
    this.funcs = {'+': (a, b) => a+b,
                  '-': (a, b) => a-b};
    this.addMethod = function(key, value) {
        this.funcs[key] = value;
    }

    this.calculate = function (str) {
        let [lhs, op, rhs] = str.split(' ');

        return this.funcs[op](Number(lhs), Number(rhs));
    }
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result );