// DOM  => Document Object Model

function changeHeading() {
  const ele = document.getElementsByTagName("h2");
  ele[0].innerText = "Himanshu Sharma";
  ele[0].style.backgroundColor = "Red";
  ele[0].style.color = "Blue";
  ele[0].style.fontSize = "50px";
}
