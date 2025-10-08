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

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach((e) => console.log(e));

console.log("=======================================================");
