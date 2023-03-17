function walk(list) {
    let buff = [];

    while (list != null) {
        buff.push(list.value);
        list = list.next;
    }

    for (let i = buff.length; i >= 0; --i) {
        console.log(buff[i]);
    }
}

function walk(list) {
    if (list == null) {
        return;
    }

    walk(list.next);
    console.log(list.value);
}
