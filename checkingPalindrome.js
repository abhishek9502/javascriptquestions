function checkingPalindrome(n){
    let reverse=0;
    let copy=n;
    while (copy!==0){
        last=copy%10
        reverse=reverse*10+last
        copy=Math.floor(copy/10)
    }
    return reverse==n;
}
console.log(checkingPalindrome(121));