let month = parseInt(prompt("Enter Month as Number:"));

let months;
switch (month) {
  case 1:
    months = "Janunary";
    break;
  case 2:
    months = "Februnary";
    break;
  case 3:
    months = "March";
    break;
  case 4:
    months = "April";
    break;
  case 5:
    months = "May";
    break;
  case 6:
    months = "June";
    break;
  case 7:
    months = "July";
    break;
  case 8:
    months = "August";
    break;
  case 9:
    months = "September";
    break;
  case 10:
    months = "October";
    break;
  case 11:
    months = "November";
    break;
  case 12:
    months = "December";
    break;
  default:
    months = "Invaild Month";
    break;
}

console.log(months);
