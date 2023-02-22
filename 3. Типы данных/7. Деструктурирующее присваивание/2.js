function topSalaries(obj) {
    let ms = Object.values(obj).reduce((acc, it) => acc>it? acc: it, 0);
    for(let [name, sal] of Object.entries(obj)) {
        if(sal == ms) {
            return name;
        }
    }
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  console.log(topSalaries(salaries));