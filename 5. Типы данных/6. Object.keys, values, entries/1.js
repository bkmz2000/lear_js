function sumSalaries(arr) {
    return Object.values(arr).reduce((acc, it)=>acc+it);
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  console.log( sumSalaries(salaries) ); // 650