function maxNumber(arr){
    max=-Infinity;
    for (let i of arr){
        if (i>max){
            max=i
        }
    }
    return max
}
console.log(maxNumber([1,9,3,4,6,7,9]))