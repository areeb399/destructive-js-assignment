const findMaxMin = (arr) =>{
    const max = Math.max(...arr);
    
    const min = Math.min(...arr);

    return {max,min};
}

const input = [55,2,1,3,4,5,6,8,8,99];
const find = findMaxMin(input);
console.log(find);