// Loops

console.log("=========== for Loop =======");

let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(5 + " X " + i + " = " + 5 * i);
}

for (let i = 1; i <= 10; i++) {
  console.log("Hello, World: ", i);
}

console.log("=========== for-in Loop =======");

let obj = {
  Name: "Himanshu Sharma",
  Age: 22,
  Email: "himanshusb713@gmail.com",
};

for (let key in obj) {
  console.log(`${key} = ${obj[key]}`);
}
