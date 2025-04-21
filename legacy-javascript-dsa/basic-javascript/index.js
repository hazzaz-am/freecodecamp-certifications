function countdown(n) {
  const newArray = [];
	if (n < 1) {
		return [];
	} else {
    console.log('running');
		newArray.push(n);
		countdown(n - 1);
		return newArray;
	}
}

console.log(countdown(5));
