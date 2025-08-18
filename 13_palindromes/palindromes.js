const palindromes = function (string) {
	const punctuation = [",", "!", ".", " "]; 
	let stringArr = [...string.toLowerCase()];
	
	let original = stringArr
		.filter(letter => !(punctuation.includes(letter)))
		.join("");

	let reversed = original.split("").reverse().join("");

	return original === reversed;
};

// Do not edit below this line
module.exports = palindromes;
