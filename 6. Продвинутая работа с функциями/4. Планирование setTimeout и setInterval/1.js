function printNumbers(from, to) {
    console.log(from)

    if (from == to) {
        return;
    }

    setTimeout(() => printNumbers(from + 1, to), 1000);
}

function printNumbers(from, to) {
    let curr = from;

    let id = setInterval(() => {
        console.log(curr++);
        if (from == to) {
            clearInterval(id);
        }
    }, 1000);
}

printNumbers(1, 10);