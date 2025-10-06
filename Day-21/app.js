async function fetchData() {
  const data = await fetch("./Data.json");
  const res = data.json();
  console.log(res);
}

fetchData();
