function unique(arr) {
    let counts = {};

    let ret = [];
    for(let it of arr) {
        if(!(it in counts)) {
            ret.push(it);
        }
        counts[it] = 1;
    }

    return ret;
}
  
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];
  
console.log( unique(strings) ); // кришна, харе, :-O