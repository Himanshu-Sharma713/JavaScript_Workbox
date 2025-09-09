// DOM  => Document Object Model

function changeHeading() {
  const ele = document.getElementsByTagName("h2");
  ele[0].innerText = "Hello, JavaScript!";
}

function changePara() {
  const ele = document.getElementsByClassName("para");
  ele[0].innerText = "Javascript is Web-based Programming language.";
}
