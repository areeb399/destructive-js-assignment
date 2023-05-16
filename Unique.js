function removeDuplicates(arr){
    return [...new Set(arr)];
}

let arr = [1,2,3,6,4,2,1,3,4,5,3,6,5,23,1,2,3];
let result = removeDuplicates(arr);
console.log(result);