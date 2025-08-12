// var, let & const

var a = 5;
var a = 25;
console.log(a);

let b = 7;
// let b = 49; ==>> Uncaught SyntaxError: Identifier 'b' has already been declared
console.log(b);

const c = 11;
// c = 55; ==>>   Uncaught TypeError: Assignment to constant variable.
console.log(c);
