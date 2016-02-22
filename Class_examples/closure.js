var add = (function () {

	// private variables
	var conuter = 0;

	//return a function that have access to that variable
	return function () {
		conuter ++;
		return conuter;
	}
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());