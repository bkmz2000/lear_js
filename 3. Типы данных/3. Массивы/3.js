function getMaxSubSum(arr) {
    let max = arr[0];
    let s = 0;

    for(let i=0; i<arr.length; ++i) {
        s += arr[i];

        if(s < 0) {
            s = 0; 
        }

        if(s > max) {
            max = s;
        }
    }

    return max;
}

console.log(getMaxSubSum([-1, 2, 3, -9]))
console.log(getMaxSubSum([2, -1, 2, 3, -9]))
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
console.log(getMaxSubSum([-2, -1, 1, 2]))
console.log(getMaxSubSum([100, -9, 2, -3, 5]))
console.log(getMaxSubSum([1, 2, 3]))

console.log(getMaxSubSum([-1, 2, 3, -9]) == 5)
console.log(getMaxSubSum([2, -1, 2, 3, -9]) == 6)
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) == 11)
console.log(getMaxSubSum([-2, -1, 1, 2]) == 3)
console.log(getMaxSubSum([100, -9, 2, -3, 5]) == 100)
console.log(getMaxSubSum([1, 2, 3]) == 6)