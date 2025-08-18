let marks = parseInt(prompt("Enter your marks"));

let grads;

switch (true) {
  case marks <= 10:
    grads = "E";
    break;
  case marks >= 11 && marks <= 20:
    grads = "D";
    break;
  case marks >= 21 && marks <= 30:
    grads = "C";
    break;
  case marks >= 31 && marks <= 40:
    grads = "B";
    break;
  case marks >= 41 && marks <= 50:
    grads = "A";
    break;
  default:
    day = "Invaild Mark's Data";
    break;
}

console.log(grads);
