function toNamesArray(arr) {
    return arr.map((obj)=>obj.name);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = toNamesArray(users);

console.log( names ); // Вася, Петя, Маша