/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = function (num) {
	let uglyStatus = false;
	let tempNum = num;
	while (tempNum % 2 === 0) {
		tempNum /= 2;
	}
	while (tempNum % 3 === 0) {
		tempNum /= 3;
	}
	while (tempNum % 5 === 0) {
		tempNum /= 5;
	}
	if (tempNum === 1) {
		uglyStatus = true;
	}
	return uglyStatus;
};

// TEST:

for (let i = 1; i < 30; i += 1) {
	console.log(`num: ${i}`, isUgly(i));
}

// console.log(isUgly(6));
// console.log(isUgly(8));
// console.log(isUgly(14));
