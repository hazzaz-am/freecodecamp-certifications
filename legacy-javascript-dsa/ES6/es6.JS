function freezeObj() {
	const MATH_CONSTANTS = {
		PI: 3.14,
	};
	// Only change code below this line
	Object.freeze(MATH_CONSTANTS);
	// Only change code above this line
	try {
		MATH_CONSTANTS.PI = 99;
	} catch (ex) {
		console.log(ex);
	}
	return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
// console.log(PI);

const sum = (...args) => {
	let total = 0;
	for (let i = 0; i < args.length; i++) {
		total += args[i];
	}
	return total;
};

const LOCAL_FORECAST = {
	yesterday: { low: 61, high: 75 },
	today: { low: 64, high: 77 },
	tomorrow: { low: 68, high: 80 },
};

// Only change code below this line

const { today: { low: lowToday }  } = LOCAL_FORECAST;
const { today: { high: highToday } } = LOCAL_FORECAST;

// console.log(lowToday, highToday);

function removeFirstTwo(list) {
   [a, b, ...arr] = [...list];
	return arr
}

const source = [1, 2, 3, 4, 5];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo);
