// В этой задаче не нужно сохранять числа в массиве
function sumInput() {
    let arr = [];
    let s = 0;
    let input = prompt("Введите число", "");

    while(input != null && input != '') {
        arr.push(Number(input));
        s+=arr.at(-1);
        input = prompt("Введите следующее число", "");
    }

    alert(s);
}