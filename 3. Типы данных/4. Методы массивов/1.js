function capitalize(str) {
    if (str === '') {
        return '';
    }

    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function camelize(str) {
    let arr = str.split("-");
    arr = arr.filter((l) => l.length > 0);

    return arr[0].toLowerCase()+arr.slice(1).map(capitalize).join('');
}
