function mergingArr(arr1,arr2){
    n=arr1.length;
    m=arr2.length;
    let result=[]
    let i=0,j=0;
    while (i<n && j<m){
        if (arr1[i]<=arr2[j]){
             result.push(arr1[i]);
             i+=1;
        }else{
            result.push(arr2[j]);
            j+=1;
        }
    }
    while (i<n){
        result.push(arr1[i]);
        i+=1
    }
    while (j<m){
        result.push(arr2[j]);
        j+=1
    }
    console.log(result);
}
const a=[1,2,3,5,6,9]
const b=[1,4,6,7]
mergingArr(a,b);