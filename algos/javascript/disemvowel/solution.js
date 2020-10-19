// take in a string as an input
// make a new variable to hold string without vowels
// for loop to check each letter in the string for vowels
// if the letter is not a vowel, add it to the new string
// return new string

function disemvowel(str) {
	// hard code version

	// let newString = ''

	// for (let i = 0; i < str.length; i++) {
	//     let letter = str[i]
	//     if (letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u' && letter !== 'A' &&
	//     letter !== 'E' && letter !== 'I' && letter !== 'O' && letter !== 'U') {
	//         newString += letter
	//     }
	// }

	// return newString

	// SIMPLER VERSION WITH A DIFFERENT STRING METHOD
	// https://www.w3schools.com/jsref/jsref_replace.asp
	return str.replace(/[aeiou]/gi, '')
}

console.log(disemvowel('This website is for losers LOL'))