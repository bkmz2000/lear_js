function formatDate(date) {
    let dt = Date.now() - date;

    if(dt/1000 < 1) {
        return "прямо сейчас";
    }

    
    let s = Math.floor(dt/1000);
    if(s < 60) {
        return `${s} сек. назад`;
    }

    let m = Math.floor(s/60);
    if(m < 60) {
        return `${m} мин. назад`;
    }

    let ret = date;
    ret = [
        ''+ret.getDate(),
        ''+(ret.getMonth() + 1),
        ''+ret.getFullYear(),
        ''+ret.getHours(),
        ''+ret.getMinutes()
    ].map(it=>it.padStart(2, '0'));

    return `${ret.slice(0, 3).join('.')} ${ret.slice(3).join(':')}`;
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

console.log( formatDate(new Date(new Date - 86400 * 1000)) );