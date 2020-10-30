function squareDigits(num) {
	const digits = num.toString().split('')
	const digitSquared = digits.map((num) => num * num)
	const number = digitSquared.join('')

	return +number
}

console.log(squareDigits(9119))