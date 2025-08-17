const removeFromArray = function() {
	let array = arguments[0];
	let index = (arg) => array.findIndex(el => el === arg);

	//remove elements from array arguments[0]
	for(const arg of arguments) {
		if(arg === array) { continue; }
		while(index(arg) != -1) {
			array.splice(index(arg),1);
		}
	}

	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
