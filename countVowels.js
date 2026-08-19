function countVowels(str){
    let count=0;
    for (let ch of str){
        if ("aeiou".includes(ch.toLowerCase())){
            count+=1;
        }
    }
    return count;
}
console.log(countVowels("Hello Abhi"));