// first Class Function in Javascript... example-1
const foo = function () {
  console.log("Hello, World!😊😊😊");
};

// foo();

// first Class Function in Javascript... example-2

let greet = function (val) {
  val();
};

greet(foo);

// higher order function in Javascript...

let foo1 = function () {
  return function () {
    console.log("Higher Order function👍👍👍👍👍");
  };
};

foo1()();
