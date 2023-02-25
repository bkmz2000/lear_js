function getWeekDay(date) {
    let names = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return names[date.getDay()];
}

let date = new Date(2012, 0, 3);
console.log( getWeekDay(date) );  