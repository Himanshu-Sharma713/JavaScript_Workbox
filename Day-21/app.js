async function fetchData() {
  const data = await fetch("./Data.json");
  const res = data.json();
  console.log(res);
}

// fetchData();

console.log(
  "========================================================================="
);

function callbackFunction(name) {
  console.log("Hello, " + name);
}

function OuterFunction(callback) {
  let name = prompt("Enter your Name: ");
  callback(name);
}

OuterFunction(callbackFunction);
