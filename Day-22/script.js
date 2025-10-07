let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);

// let a = arr.shift();

// console.log(a);
// console.log(arr);

// let b = arr.unshift(a);

// console.log(b);
// console.log(arr);

console.log("============================================================");

let brr = arr.map((e) => {
  return e ** 2;
});

console.log(brr);

console.log("============================================================");

let a = arr.pop();
console.log(a);
console.log(arr);

let b = arr.push(a);
console.log(b);
console.log(arr);

console.log("============================================================");
