const findTheOldest = function(people) {

	let age = (person) => person.yearOfDeath - person.yearOfBirth;

	//filter out bad apples (undefined)
	let definedAges = people.filter(person => "yearOfDeath" in person && "yearOfBirth" in person);
	let oldest = definedAges
		.map(person => age(person))
		.sort((a,b) => b-a)[0];
	return definedAges.filter(person => oldest === age(person))[0]; 
};

// Do not edit below this line
module.exports = findTheOldest;
