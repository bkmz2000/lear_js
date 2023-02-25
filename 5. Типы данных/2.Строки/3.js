function truncate(str, maxlength) {
    if(str.length <= maxlength) {
        return str;
    }

    let ret = str.slice(0, maxlength-1);
    return ret + "…";
}