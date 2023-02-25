function unique(arr) {
    let seen = new Set();
    let ret = [];
    for(let it of arr) {
        if(!(seen.has(it))) {
            ret.push(it);
        }

        seen.add(it);
    }

    return ret;
}
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) ); // Hare,Krishna,:-O