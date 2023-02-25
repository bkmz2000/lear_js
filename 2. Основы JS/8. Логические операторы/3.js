let login = prompt("Введите логин: ", "")

if(login == "") {
    alert("Отмена");
} 
else if(login == "Админ") {
    let password = prompt("Введите пароль: ", "");
    if(password == "Я главный") {
        alert("Здравствуйте!");
    } 
    else if(password == "") {
        alert("Отменено");
    } 
    else {
        alert("Неверный пароль")
    }
} 
else {
    alert("Я вас не знаю");
}
