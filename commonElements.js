function commonElements(arr1,arr2){
    let res=[]
    for (let i of arr1){
        if (arr2.includes(i)){
            res.push(i);
        }
    }
    return res;
}
print(commonElements([1,2,3],[4,5,6,1,2,9]));