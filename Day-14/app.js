// API

async function fetchData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      if (!response.ok) {
        console.log("Error");
      }
      return response.json();
    }
  );

  const userData = data.map((user) => {
    return {
      name: user.name,
      email: user.email,
    };
  });

  console.log(userData);
}

fetchData();
