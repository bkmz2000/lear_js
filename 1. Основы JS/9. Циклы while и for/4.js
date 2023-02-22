// Для больших n имеет смысл использрвать алгоритм Евклида

for(let i = 2; i < n; ++i) {
    let prime = true;

    for(let d = 2; x<= i; ++d) {
        if(i%d == 0){
            prime = false;
            break;
        }
    }

    if(!prime) {
        continue;
    }

    alert(i);
}