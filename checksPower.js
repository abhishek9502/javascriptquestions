function checkPower(){
    let n=Number(prompt("Give number:"))
    let i=3
    let a=3
    while (i<=n){
        if (i===n){
            return true
        }
        i*=a
    }
    return false
}
console.log(checkPower())