var name = 'Claus';

// function expression
var add = function (x, y){
	var u = x + y + name;
	return u;
}
console.log(add(3, 5));

//function declaration
function add2 (x, y) {
	return x+y;
}
console.log(add2(3, 3));