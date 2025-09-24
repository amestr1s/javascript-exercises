// function sum(...numbers) {
//         let result = 0;
//         for(let number of numbers){
//             if (number < 0) {
//                 result = "ERROR";
//                 return result;
//             }else {
//             result += number;
//         } 
//         return result;
//     }
// }

// const sumAll = function sum(...numbers) {
//         let result = 0;
//         for(let number of numbers){
//             if (number < 0) {
//                 result = "ERROR";
//                 return result;
//             }else {
//             result += number;
//         } 
//         return result;
//     }
// }
// const arr = [];
// function getInts (a, b) {
//     for (let i = a; i <= b; i++ ) {
//         arr.push(i);
    
//     } return arr;
// }

const sumAll = function getInts (a, b) {
    const arr = [];
    if (a < b && a > 0 && b > 0 && Number.isInteger(a) && Number.isInteger(b)) {
    for (let i = a; i <= b; i++ ) {
        arr.push(i);
    
    } return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
} else if (b < a && a > 0 && b > 0 && Number.isInteger(a) && Number.isInteger(b)) {
    for (let i = b; i <= a; i++ ) {
        arr.push(i);
    
    } return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
 } else return str = "ERROR";
}

// Do not edit below this line
module.exports = sumAll;
