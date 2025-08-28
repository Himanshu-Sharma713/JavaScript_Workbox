// String

let str = "My Name is Himanshu Sharma";
str = str.toLowerCase();
let num = 0;

for (let i = 0; i < str.length; i++) {
  if (
    str.charAt(i) === "a" ||
    str.charAt(i) === "e" ||
    str.charAt(i) === "i" ||
    str.charAt(i) === "o" ||
    str.charAt(i) === "u"
  ) {
    num++;
  }
}

console.log(num);
