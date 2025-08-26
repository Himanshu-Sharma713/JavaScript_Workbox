// functions
let userName = "Himanshu Sharma";
let age = 22;
function sayHello() {
  console.log(`Hello, My Name is: ${userName}, My Age is: ${age}....`);
}

sayHello();

const greeting = (fullName, Age) => {
  console.log(`Hello, My Name is: ${fullName}, My Age is: ${Age}....`);
};

greeting("Deepak Kumar", 23);

const functionExpression = function (a, b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
};

functionExpression(5, 4);

function sum(a, b) {
  return a + b;
}

console.log(sum(99, 77));
