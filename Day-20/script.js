function changeTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let l = "am";

  if (h > 12) {
    h = h - 12;
    l = "pm";
  }

  let time = `${h} : ${m} : ${s} ${l}`;

  let ele = document.getElementsByClassName("clock");
  ele[0].innerHTML = time;

  setTimeout(() => {
    changeTime();
  }, 1000);
}

changeTime();
