let i = 0;

function change() {
  let ele = document.getElementsByClassName("head");
  ele[0].innerText = `Count = ${i}`;
  i++;

  let ele1 = document.getElementById("heading");
  ele1.style.backgroundColor = "pink";
  ele1.style.color = "blue";
}
