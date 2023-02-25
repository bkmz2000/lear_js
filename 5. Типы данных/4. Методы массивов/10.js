function shuffle(arr) {
    if (arr.length === 0) {
        return [];
    }

    let idx = Math.floor(Math.random()*arr.length)
    return [arr[idx]].concat(shuffle(arr.slice(0, idx).concat(arr.slice(idx+1))));
}

let count = {
    '1423': 0,
    '1432': 0,
    '2413': 0,
    '2431': 0,
    '3421': 0,
    '3412': 0,
    '4123': 0,
    '4132': 0,
    '4213': 0,
    '4231': 0,
    '4321': 0,
    '4312': 0,
    '1243': 0,
    '1342': 0,
    '2143': 0,
    '2341': 0,
    '3241': 0,
    '3142': 0,
    '1234': 0,
    '1324': 0,
    '2134': 0,
    '2314': 0,
    '3214': 0,
    '3124': 0
  };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3, 4];
    let result = shuffle(array);

    count[result.join('')]++;
  }
  
  for (let key in count) {
    console.log(`${key}: ${count[key]}`);
  }