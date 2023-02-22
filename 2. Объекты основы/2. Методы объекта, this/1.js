let calculator = {
    read() {
        this.lhs = Number(prompt('Введите первое число: ', '0'));
        this.rhs = Number(prompt('Введите второе число: ', '0'));
    },

    sum() {
        return this.lhs + this.rhs;
    },

    mul() {
        return this.lhs * this.rhs;
    }
};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );