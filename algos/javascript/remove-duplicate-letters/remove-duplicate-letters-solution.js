/**
 * @param str
 * @returns {string}
 */

// Assumption - The string has only alphabets
// Big O Notation - O(N)

function removePairDuplicate(str) {
	if (str.length <= 1) {
		return str;
	}

	let resultStr = '';
	let i = 0;
	while (i < str.length - 2) {
		// Get the unicode value of the characters
		let currentCharCode = str.charCodeAt(i);
		let nextCharCode = str.charCodeAt(i + 1);

		// if lowercase letter is followed by it's uppercase letter
		if (
			currentCharCode > 97 &&
			currentCharCode < 122 &&
			nextCharCode > 65 &&
			nextCharCode < 90 &&
			currentCharCode - nextCharCode === 32
		) {
			i += 2;
		}
		// if uppercase letter is followed by it's lowercase letter
		else if (
			currentCharCode > 65 &&
			currentCharCode < 90 &&
			nextCharCode > 97 &&
			nextCharCode < 122 &&
			nextCharCode - currentCharCode === 32
		) {
			i += 2;
		}
		// else add it to the string
		else {
			resultStr += str[i++];
		}
	}
	while (i != str.length) {
		resultStr += str[i++];
	}

	return resultStr;
}

console.log(removePairDuplicate('abcCkDdppGGa'));
console.log(removePairDuplicate('jHYti'));
