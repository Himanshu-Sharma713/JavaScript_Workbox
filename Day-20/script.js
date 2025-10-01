function changeTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let time = `${h} : ${m} : ${s}`;
  let ele = document.getElementsByClassName("clock");
  ele[0].innerHTML = time;

  setTimeout(() => {
    changeTime();
  }, 1000);
}

changeTime();
