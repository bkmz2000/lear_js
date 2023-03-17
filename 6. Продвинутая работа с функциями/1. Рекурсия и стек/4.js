function walk(list) {
    while (list != null) {
        console.log(list.value);
        list = list.next;
    }
}

function walk(list) {
    if (list == null) {
        return;
    }

    console.log(list.value);
    walk(list.next);
}
