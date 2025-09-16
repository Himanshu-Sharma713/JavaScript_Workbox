// API

async function fetchData() {
  const data = await fetch();
  let res = data.json();
  console.log(res);
}
