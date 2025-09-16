// API

async function fetchData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  let res = data.json();
  console.log(res);
}

fetchData();
