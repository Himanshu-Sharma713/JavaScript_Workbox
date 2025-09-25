// first Class Function in Javascript... example-1
const foo = function () {
  console.log("Hello, World!");
};

// foo();

// first Class Function in Javascript... example-2

let greet = function (val) {
  val();
};

greet(foo);
