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

  const userData = (document.getElementById("data").innerHTML = data.map(
    (user) => {
      return `<strong>Name = </strong> ${user.name}, <strong> Email = </strong> ${user.email} <br/><br/> `;
      // {
      //   name: user.name,
      //   email: user.email,
      // };
    }
  ));

  console.log(userData).catch((err) => {
    console.log(err, "Data Not Fetch...");
  });
}

fetchData();
