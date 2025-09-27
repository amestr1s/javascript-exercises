const fibonacci = function(numMax){
    if (numMax === 0 || numMax === "0") {
        return 0;
    } else if (numMax < 0) {
        return "OOPS";
    } else {
    let fibArray = [1];
    let i = 0, j = 1, x;
    for(let k = 0; k < numMax; i = j, j = x, k++) {
        x=i+j;
        fibArray.push(x);
    } return fibArray[numMax - 1];
    }}



// Do not edit below this line
module.exports = fibonacci;
