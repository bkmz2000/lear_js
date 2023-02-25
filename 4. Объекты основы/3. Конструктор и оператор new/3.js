function Accumulator(startingValue) {
    this.value = Number(startingValue);

    this.read = function(){
        this.value += Number(prompt("Введите новое число: ", ""));
    }
}

let accumulator = new Accumulator(1);

accumulator.read(); 
accumulator.read(); 

alert(accumulator.value); 