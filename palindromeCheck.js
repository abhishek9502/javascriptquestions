function palindromeChecks(){
    let str=prompt("Enter String:");
    let i=0;
    let j=str.length-1;
    while (i<j){
        if (str[i]!==str[j]){
            return false;
        }
        i+=1
        j-=1
    }
    return true;


}
console.log(palindromeChecks());

