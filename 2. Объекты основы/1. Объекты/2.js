function isEmpty(obj) {
    let ret = true;
    for(key in obj) {
        ret = false;
        break;
    }

    return ret;
}