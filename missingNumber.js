function missingNumber(arr){
    let sum=0;
    for (let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    let n=arr.length+1;
    return n*(n+1)/2-sum;
}
console.log(missingNumber([1,2,3,4,5,6,8,9]));
