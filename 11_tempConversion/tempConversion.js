const convertToCelsius = function(num) {
  num = ((num - 32) * (5 / 9));
 return num = Math.round(num * 10) / 10;
}

const convertToFahrenheit = function(num) {
  num = (num * (9 / 5) + 32);
 return num = Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
