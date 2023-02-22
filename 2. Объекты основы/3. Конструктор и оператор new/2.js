function Calculator() {
    this.read() = function () {
        this.lhs = Number(prompt('Введите первое число: ', '0'));
        this.rhs = Number(prompt('Введите второе число: ', '0'));
    };

    this.sum() = function () {
        return this.lhs + this.rhs;
    };

    this.mul() = function () {
        return this.lhs * this.rhs;
    };
};

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );