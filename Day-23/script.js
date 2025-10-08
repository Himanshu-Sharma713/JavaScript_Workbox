let student = {
  name: "Himanshu Sharma",
  age: 22,
  email: "himanshusb713@gmail.com",
  contact: 70782122145,
};

for (const key in student) {
  console.log(`${key} : ${student[key]}`);
}

console.log("=======================================================");

let arr = [9, 18, 27, 36, 45, 54, 63, 72, 81, 90];

arr.forEach((num, index) => console.log(`9 X ${index + 1} = ${num}`));

console.log("=======================================================");

let arr1 = [1, 2, 3, 4, 5];

let sum = arr1.reduce((accumlator, currentValue) => {
  return accumlator + currentValue;
}, 0);

console.log("Sum is: ", sum);

console.log("=======================================================");
