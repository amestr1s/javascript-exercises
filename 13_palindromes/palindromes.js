function noSpace(value) {
    return value !== " " && value !== "!" && value !== "." && value !== ",";
}

const palindromes = function (text) {
    let text2 = text.toLowerCase();
    let textSplit = text2.split("");
    let filteredArr = textSplit.filter(noSpace);
    let text3 = filteredArr.toString();
    let reversedArr = filteredArr.reverse();
    let text4 = reversedArr.toString();
    if (text3 === text4) {
        return true;
    } else return false;
};






// // Create and display an array:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo1").innerHTML = fruits;

// // First sort the array
// fruits.sort();

// // Then reverse it:
// fruits.reverse();

// document.getElementById("demo2").innerHTML = fruits;



// let text = "How are you doing today?";
// const myArray = text.split("");

// document.getElementById("demo").innerHTML = myArray;



// const numbers = ["la", "three",  ,  , 25];
// const over18 = numbers.filter(myFunction);

// document.getElementById("demo").innerHTML = over18;

// function myFunction(value) {
//   return value !== " ";
// }







// Do not edit below this line
module.exports = palindromes;
