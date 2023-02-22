let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

function sumSalaries(obj) {
    let ret = 0;

    for(key in obj) {
        ret += obj[key];
    }

    return ret;
}

let sum = sumSalaries(salaries);