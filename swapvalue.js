function swapValue(x,y){
    [x,y]=[y,x];
    return [x,y];
}

let x= 5;
let y=10;
let result = swapValue(x,y);
console.log(result);
console.log(x);
console.log(y);