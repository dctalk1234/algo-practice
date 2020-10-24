let dnaStrings = (str, index = 0, comp = []) => {
	let strArr = str.split('');
	const compMap = {
		A: 'T',
		T: 'A',
		G: 'C',
		C: 'G',
	};

	let dna;

	if (index === str.length) {
	} else {
		let char = strArr[index];
		let compliment = compMap[char];
		comp.push(compliment);
		dnaStrings(str, index + 1, comp);
	}
	return (dna = comp.join(''));
};

console.log('recursion:', dnaStrings('ATTGC'));
