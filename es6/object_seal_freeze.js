const person = {
  name: "hena",
  age: 10,
  country: "BD",
};

console.log(person);
// console.log(Object.entries(person))

// seal -> cannot add property but edit existing properties
// Object.seal(person);

// freeze --> cannot add property nor edit existing ones
Object.freeze(person);

person.age = 20;
person.status = "not found";

console.log(person);
