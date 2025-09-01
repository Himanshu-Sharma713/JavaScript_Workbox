// Javascript Object

// let obj = {
//   fullName: "Himanshu Sharma",
//   Age: 22,
//   Course: "Full Stack Java Development",
//   Hobbies: ["Reading", " Travelling", " Listening Musics "],
// };

// for (const key in obj) {
//   console.log(`${key} = ${obj[key]}`);
// }

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Eagle", "Talon TSi", 1993);

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

const rectangle = new Rectangle(10, 10);
