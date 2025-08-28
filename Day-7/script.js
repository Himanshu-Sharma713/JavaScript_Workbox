// Do While loop

// console.log("===== do while loop =====");

// let i = 0;

// do {
//   console.log(`Hello, World!...  ${i}`);
//   i++;
// } while (i < 10);

// ==============>>>>>>>>>>>>>>-------     Question 1

let arr = [4, 8, 2, 0, 5, 7, 1, 1, 0];
let even = 0;
let odd = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}

console.log("Even element: ", even);
console.log("Odd element: ", odd);
