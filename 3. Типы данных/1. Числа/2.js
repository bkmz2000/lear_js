function readNumber() {
    let input = prompt("Введите число", "");

    while(isNan(parseInt(input)) && input != null && input != '') {
        ret = prompt("Введите число", "");
    }

    return parseInt(input); 
}