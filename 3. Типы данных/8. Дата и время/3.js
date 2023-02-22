function getLocalDay(date) {
    let d = date.getDay();
    if(d == 0) {
        return 7;
    }

    return d;
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getLocalDay(date) );       // вторник, нужно показать 2