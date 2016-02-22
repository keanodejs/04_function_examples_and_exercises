function foo (name, greeting) {
	
	console.log(greeting() + ' ' + name);
	
}

foo('Claus', function () {
	return 'Hello';
});

foo('Henning', function () {
	return 'Wake up ';
});
