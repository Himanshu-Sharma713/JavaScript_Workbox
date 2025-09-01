// Javascript Object

let obj = {
  fullName: "Himanshu Sharma",
  Age: 22,
  Course: "Full Stack Java Development",
  Hobbies: ["Reading", " Travelling", " Listening Musics "],
};

for (const key in obj) {
  console.log(`${key} = ${obj[key]}`);
}
