function animal (name, callback) {
	callback();
	console.log(name);
}


animal('Claus', function (){
	console.log('hello ');
});