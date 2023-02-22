function aclean(arr) {
    let seen = new Set();

    let ret = [];
    for(let word of arr) {
        let key = Array.from(word.toLowerCase()).sort().join();
        if(!seen.has(key)) {
            ret.push(word);
        }

        seen.add(key);
    }

    return ret;
}

let arr = ["nap", "PAN","teachers", "cheaters",  "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"