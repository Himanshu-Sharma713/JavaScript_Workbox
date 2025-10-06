async function fetchData() {
  const data = await fetch("./Data.json");
  const res = data.json();
  console.log(res);
}

// fetchData();

console.log(
  "========================================================================="
);

function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Ajay", sayBye);
