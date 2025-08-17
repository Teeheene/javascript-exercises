const sumAll = function(start, rep) {
	isDecimal = (el) => {
		if(el - Math.floor(el) > 0)
			return true;
		else return false;
	}
	//error handling
	if(start < 0 || rep < 0 ||
		typeof start != "number" || typeof rep != "number" ||
		isDecimal(start) || isDecimal(rep))
		return "ERROR";

	let sum = 0;

	if(rep < start) { [rep, start] = [start, rep]; }
	for(let i = 0; i <= rep - start; i++) {
		sum += start + i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
