// API

let API = "./data.json";

async function fetchData() {
  const data = await fetch(API)
    .then((response) => {
      if (!response.ok) {
        console.log("Error");
      }
      return response.json();
    })
    .then((userData) => {
      const matureUsers = userData.filter((user) => {
        return user.age <= 30;
      });
      console.log(matureUsers);
    });
  let maturelistDiv = document.getElementById("matureList");
  if (maturelistDiv) {
    if (matureUsers.length === 0) {
      maturelistDiv.textContent = "No mature users list found";
    } else {
      matureUsers.forEach((user) => {
        const p = document.createElement("p");
        p.textContent = `${user.name} ${user.age} ${user.contact}`;
        maturelistDiv.appendChild(p);
      });
    }
  }
}
fetchData();
