let box = document.getElementsByClassName("box");

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return rgb(`${r}, ${g}, ${b}`);
}

function backgroundRandomColor() {
  let rc = randomColor();
  box[0].style.backgroundRandomColor = rc;
}
