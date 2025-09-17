// images API
const API = "https://boringapi.com/api/v1/photos/";

async function fetchPhoto() {
  try {
    const res = await fetch(API);
    if (!res.ok) throw new Error("Error fetching API");
    const data = await res.json();

    // assume API returns array or object with url
    const url = Array.isArray(data) ? data[0].url || data[0] : data.url;

    if (url) {
      const img = document.createElement("img");
      img.src = url;
      img.alt = "photo";
      img.style.maxWidth = "300px";
      document.getElementById("photoBox").appendChild(img);
    } else {
      document.getElementById("photoBox").textContent =
        "No image found in response.";
    }
  } catch (err) {
    console.error(err);
    document.getElementById("photoBox").textContent = "Failed to fetch.";
  }
}

fetchPhoto();
