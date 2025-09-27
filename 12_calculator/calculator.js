const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let result = arr.reduce((sum, current) => sum + current, 0);
  return result;
};

const multiply = function(arr) {
  let result = arr.reduce((product, current) => product * current);
  return result;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a === 0) {
    return result = 1;
  } else 
    result = a;
    let c = 1;
    for (let i = 0; i < (a - 1); i++) {
      result *= (a - c);
      c++;
    } return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
