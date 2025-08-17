const roundOff = (num) => {
	let digit = Math.floor(num);
	let dec = num - digit;
	let roundOff = Math.round(dec * 10)/10;
	return digit + roundOff;
}

const convertToCelsius = function(fahrenheit) {
	return roundOff((fahrenheit - 32) * 5/9);
};

const convertToFahrenheit = function(celsius) {
	return roundOff((celsius * 9/5) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
