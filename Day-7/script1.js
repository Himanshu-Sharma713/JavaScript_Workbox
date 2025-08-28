// Find the largest number in array

let arr = [4, 33, 1, 2, 7, 88, 91, 15];
let largestNumber = Number.MIN_VALUE;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largestNumber) {
    largestNumber = arr[i];
  }
}

console.log("Largest Number is: ", largestNumber);

// Find the Smallest number in array

let smallestNumber = Number.MAX_VALUE;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smallestNumber) {
    smallestNumber = arr[i];
  }
}

console.log("Smallest Number is: ", smallestNumber);
