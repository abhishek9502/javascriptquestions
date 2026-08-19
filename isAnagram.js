function isAnagram(s1,s2){
    if(s1.length!==s2.length){
        return false;
    }
    let count={};
    for (let ch of s1){
        count[ch]=(count[ch]||0)+1;
    }
    for (let ch of s2){
        if(!count[ch]){
            return false;
        }
        count[ch]--;
    }
    return true
}
console.log(isAnagram("listen","silent"))

