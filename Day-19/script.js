let i = 0;

function change() {
  let ele = document.getElementsByClassName("head");
  ele[0].innerText = `Count = ${i}`;
  i++;
}
