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

let crr = arr.filter((e) => {
  return e % 2 === 0;
});

console.log(crr);
console.log(arr);

console.log("============================================================");

let n = arr.length;
console.log("Length", n);

let n1 = arr.find((e) => {
  e > 5;
});
console.log(n1);

let n2 = arr.findIndex((x) => x == 7);
console.log("find index: ", n2);

arr.forEach((e) => {
  console.log(e);
});

console.log(arr.reverse());
console.log(arr.reverse());

console.log(arr.includes(6));

let n3 = arr.slice(3, 6);
console.log(n3);

console.log(arr.toString());

console.log("============================================================");
