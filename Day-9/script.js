// // map and set

// let map = new Map();
// map.set("fullName", "Himanshu Sharma");
// map.set("Age", 22);
// map.set("Email", "himanshusb713@gmail.com");
// map.set("Hobbies", ["Reading", " Listening Music", " Travelling"]);
// map.set("isTrue", true);

// console.log(map);
// // console.log(map.has("agel"));
// // console.log(map.has("Age"));

// // console.log(map.get("fullName"));
// // console.log(map.get("FullName"));

// // console.log(map.size);

// // // map.clear();

// // map.delete("isTrue");
// // console.log(map.size);
// // console.log(map);

// // console.log(map.keys());
// // console.log(map.values());

// for (let [key, value] of map) {
//   console.log(`${key} => ${value}`);
// }

let mySet = new Set();
mySet.add("Himanshu");
mySet.add("Deepak");
mySet.add("Abhay");

// console.log(mySet);

// console.log(mySet.values());
// console.log(mySet.entries());

// console.log(mySet.size);
// mySet.clear();
// mySet.delete(22);
// console.log(mySet.size);

for (let [key, value] of mySet) {
  console.log(key + " = " + value);
}
