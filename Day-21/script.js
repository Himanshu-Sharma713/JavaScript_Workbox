let box = document.getElementsByClassName("box");

function backgroundRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let rc = `rgb(${r}, ${g}, ${b})`;
  box[0].style.backgroundColor = rc;
}
