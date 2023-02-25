function capitalize(str) {
    if(str === "") {
        return "";
    }

    return str[0].toUpper() + str.slice(1);
}

