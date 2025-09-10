function change() {
  const ele = document.getElementById("clock");
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let seconds = date.getSeconds();
  hour = hour % 12 || 12;
  let period = hour >= 12 ? "AM" : "PM";
  let time = `${hour} : ${min} : ${seconds}   ${period}`;

  ele.innerHTML = time;
  setTimeout(() => {
    change();
  }, 1000);
}
change();

setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
    }, 3000);
  }, 2000);
}, 1000);
