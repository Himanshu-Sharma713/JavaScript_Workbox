const ele = document.getElementsByClassName("container");
const btn = document.getElementsByClassName("card");

function change() {
  ele[0].style.flexDirection = "column";
  btn[0].style.backgroundColor = "red";
  btn[1].style.backgroundColor = "green";
  btn[2].style.backgroundColor = "blue";
}
