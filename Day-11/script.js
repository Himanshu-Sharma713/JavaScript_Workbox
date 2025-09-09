// DOM  => Document Object Model

function changeHeading() {
  const ele = document.getElementsByTagName("h2");
  ele[0].innerText = "Hello, JavaScript!";
}

function changePara() {
  const ele = document.getElementsByClassName("para");
  ele[0].innerText =
    "Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.";
}
