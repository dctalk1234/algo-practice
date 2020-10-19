const addThis = (x) => {
	if (x === '') {
		return 0;
	} else if (x < 10) {
		return x;
	} else {
		let returnX = x + '';
		returnX = returnX.split('');

		let sumX = parseInt(returnX.pop()) + addThis(parseInt(returnX.join('')));
		return sumX < 10 ? sumX : (sumX % 10) + Math.floor(sumX / 10);
	}
};

addThis(69);