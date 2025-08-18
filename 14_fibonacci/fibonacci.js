const fibonacci = function(n) {
	let prev1 = 1;	
	let prev2 = 1;
	let curr = 0;
	
	n = parseInt(n);

	if(n == 1 || n == 2)
		return 1

	if(n < 0)
		return "OOPS"

	for(let i = 2; i < n; i++) {
		curr = prev1 + prev2 
		prev2 = prev1
		prev1 = curr;
	}

	return curr;
};

// Do not edit below this line
module.exports = fibonacci;
