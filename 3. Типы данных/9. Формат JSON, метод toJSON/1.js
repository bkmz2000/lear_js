let user = {
    name: "Василий Иванович",
    age: 35
  };

let other = JSON.parse(JSON.stringify(user));

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  // цикличные ссылки
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  console.log( JSON.stringify(meetup, function replacer(key, value) {
    if(key === 'self') {
        return undefined;
    }
    if(key === 'place') {
        delete value['occupiedBy'];
        return value;
    }

    return value;
  }));