const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	return arr.reduce((sum, item) => sum + item, 0);
};

const multiply = function(arr) {
	return arr.reduce((product, item) => product * item, 1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	let total = 1;

	for(let i = a, j = 0; i > 0; i--, j++) {
		total *= a-j;
	}

	return total;
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
