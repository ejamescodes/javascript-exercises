const convertToCelsius = function(temp) {
  let celsius = Math.round(((temp-32)*(5/9))*10)/10;
  return celsius;
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = Math.round((temp*(9/5)+32)*10)/10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
