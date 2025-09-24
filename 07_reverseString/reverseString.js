const reverseString = function(text) {

const arr = [];
//let char = "";

let length = text.length;
for (let i = length - 1; i >= 0; i--) {
let a = text.charAt(i);
arr.push(a);
}

return arr.join("");
}


// Do not edit below this line
module.exports = reverseString;
