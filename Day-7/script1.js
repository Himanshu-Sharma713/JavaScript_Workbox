// Find the largest number in array

let arr = [4, 33, 1, 2, 7, 88, 91, 15];
let largestNumber = Number.MIN_VALUE;
let largestNumberIndex;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largestNumber) {
    largestNumber = arr[i];
    largestNumberIndex = i;
  }
}

console.log("Largest Number is: ", largestNumber);

// Find the Second Largest number in array

arr[largestNumberIndex] = Number.MIN_VALUE;
let secondLargestNumber = Number.MIN_VALUE;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > secondLargestNumber) {
    secondLargestNumber = arr[i];
  }
}

console.log("Second Largest Number is: ", secondLargestNumber);
