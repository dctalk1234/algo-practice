// Array of random unique values

// Write a function called uniqueVals that will return an array of unique values, no duplicates allowed. It will accept 2 arguments, the first will be the desired length of the returned array and the second will the be the max value in the random set.

// Input: uniqueVals(5,10)
// Possible Output: [1,7,3,9,2]

/**
 * @param quantity
 * @param maxVal
 * @returns {[]}
 */

// Assumption - The array should have random, unique WHOLE numbers.
function uniqueVals(quantity, maxVal) {
	const arr = [];
	while (arr.length < quantity) {
		const randomValue = Math.floor(Math.random() * maxVal);
		if (!arr.includes(randomValue)) {
			arr.push(randomValue);
		}
	}
	return arr;
}

console.log(uniqueVals(5, 10));
