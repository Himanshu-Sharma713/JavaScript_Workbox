function change() {
  let ele = document.getElementsByClassName("box");
  let angle = 0;
  angle += 60;
  ele[0].style.transform = `rotate(${angle}deg)`;
}
 