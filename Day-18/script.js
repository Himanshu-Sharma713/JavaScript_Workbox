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

// higher order function in Javascript...

function length() {
  l = parseInt(prompt("Enter the Length: "));
  breadth();
  function breadth() {
    b = parseInt(prompt("Enter the breadth: "));
  }
}

function rectangle(l, b) {
  area = l * b;
  return area;
}

// length();

// let ans = rectangle(l, b);
// console.log(`Area of Reactangle: ${ans}`);

// Task

const text = document.getElementById("text");
const btn = document.getElementById("hideButton");

btn.addEventListener("click", function () {
  text.style.display = "none";
});
