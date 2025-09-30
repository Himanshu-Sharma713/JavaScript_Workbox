let i = 0;

function change() {
  let ele = document.getElementsByTagName("p");
  ele[0].innerText = `Count = ${i}`;
  i++;
}
