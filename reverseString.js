function reverseString(str){
    let reverse="";
    let letter=str.split("");
    for (let i=letter.length-1; i>=0; i--){
        reverse+=str[i];
    }
    console.log(reverse);
}
reverseString("Hello");
