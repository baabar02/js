console.log("object");

let person = {
  firstname: "batbayar",
  lastname: "dashnyam",
  age: 22,
  address: {
    district: "HUD",
  },
  score: [90, 90, 100],
  print: function () {
    console.log("name:", this.firstname);
  },
};

let person1 = {
  firstname: "naraa",
  lastname: "saraa",
  age: 22,
  address: {
    district: "HUD",
  },
  score: [90, 90, 100],
  print: function () {
    console.log("name:", this.firstname);
  },
};

console.log("person", person);
console.log("person-name", person.firstname);
console.log("person-last name", person.lastname);
// console.log('person',person.age);
console.log("person nas", person["age"]);

console.log("person", person.address.district);
console.log("person", person.score[2]);

person.print();
person1.print();

// console.log();
// person1.print();

let rabbit = {
  name: "bunny",
  color: "white",
};

let mouse = {
  name: "jerry",
  color: "brown",
};

let marmot = {
  name: "walter",
  color: "yellow",
};

let animals = [
  { name: "bunny", color: "white" },
  { name: "jerry", color: "brown" },
  { name: "walter", color: "yellow" },
];

console.log("name", rabbit);
