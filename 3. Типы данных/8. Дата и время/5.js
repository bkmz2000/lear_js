function getLastDayOfMonth(year, month) {
    let temp = new Date(year, month+1, 1);
    temp.setDate(temp.getDate()-1);
    return temp.getDate();
}


console.log( getLastDayOfMonth(2012, 0) ); // 31
console.log( getLastDayOfMonth(2012, 1) ); // 29
console.log( getLastDayOfMonth(2013, 1) ); // 28