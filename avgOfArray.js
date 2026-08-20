function avgOfArray(arr){
    let sum=0
    const n=arr.length
    for (let i of arr){
        sum+=i;
    }
    console.log(sum/n)
}
avgOfArray([1,2,3,4,5,6,7]);