console.log("===========  Call  ===========");

var person1 = {
  firstName: "Himanshu",
  lastName: "Sharma",
};

function test(greeting, year) {
  console.log(`${greeting} ${this.firstName} ${this.lastName} ${year}`);
}

test.call(person1, "Hello");
test.call(person1, "Hello", 2025);

console.log("===========  Apply  ===========");

test.apply(person1, ["Hello", 2025]);
