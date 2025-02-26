console.log("Object");

let person = {
  firstname: "Naraa",
  lastname: "Dorj",
  age: 22,
  address: {
    district: "HUD",
  },
  score: [90, 90, 100],

  hevle: function () {
    console.log("Name:", this.firstname);
  },
};

let person1 = {
  firstname: "Saraa",
  lastname: "Bat",
  age: 22,
  address: {
    district: {
      code: "HUD",
    },
  },
  score: [90, 90, 100],

  hevle: function () {
    console.log("Name:", this.firstname);
  },
};

console.log("Person:", person);
console.log("Person-Name:", person.firstname);
console.log("Person-Ovog:", person.lastname);
// console.log("Person-Nas:", person.age);
console.log("Person-Nas:", person["age"]);

console.log("Person-Nas:", person.address.district);
console.log("Person-Nas:", person.score[2]);

person.hevle();
person1.hevle();

let a = 1000;

let b = 0;
console.log(a);
console.log(b);
b = a;
console.log(a);
console.log(b);

let person3 = { ...person1 };

person3.firstname = "Tsetsgee";

console.log(person3.firstname);
console.log(person1.firstname);

console.log();

// Math.floor

let h = [1, 2];

// h.leng

let too = 100;
too.toFixed(3);
console.log(too);

let zoo = "123.23";

// zoo = Number(zoo) + 100;
// zoo = parseInt(zoo) + 100;
zoo = parseFloat(zoo) + 100;
console.log(zoo.toFixed(2));

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

let employees = [
  {
    name: "bunny",
    accountnumber: "0012",
    transactions: [
      { date: "2024-09-11" },
      { date: "2024-09-12" },
      { date: "2024-09-13" },
    ],
    color: "white",
    salary: 1000,
  },
  {
    name: "jerry",
    color: "white",
    salary: 1000,
  },
  {
    name: "walter",
    color: "white",
    salary: 1000,
  },
];

// for (let index = 0; index < animals.length; index++) {
//   console.log("Name: ", animals[index].name);
// }

let students = [
  {
    name: "Сэд-Эрдэнэ",
    age: 19,
    gender: "male",
    points: 70,
  },
  {
    name: "Индра",
    age: 19,
    gender: "female",
    points: 50,
  },
  {
    name: "Хатнаа ",
    age: 21,
    gender: "male",
    points: 99,
  },
  {
    name: "Тэмүүлэн",
    age: 23,
    gender: "male",
    points: 55,
  },
  {
    name: "Намуун",
    age: 23,
    gender: "female",
    points: 85,
  },
];

let student1 = 0;

console.log("object-1:", students[0]);

let male = 0;

for (let i = 0; i < students.length; i++) {
  if (students[i].gender === "male") {
    male = male + 1;
  }
}

console.log("male:", male);

let female = 0;

for (let i = 0; i < students.length; i++) {
  if ("female" === students[i].gender) {
    female = female + 1;
  }
}

console.log("female:", female);

let sum = 0;
let avarageAge = 0;
for (let i = 0; i < students.length; i++) {
  sum = sum + students[i].age;
  // avarageAge = avarage / students[i];
}

avarageAge = sum / students.length;
console.log("total age:", sum); // 5
console.log("avarage age:", avarageAge);

let score = 0;

for (let i = 0; i < students.length; i++) {
  if (students[i].points <= 60) {
    score++;
  }
}
console.log("over 60:", score);

let femalepoints = 0;

for (let i = 0; i < students.length; i++) {
  if (students[i].gender === "female" && students[i].age <= 21) {
    femalepoints = femalepoints + students[i].points;
  }
}
console.log("sad;", femalepoints);

let malePoints = 0;

for (let i = 0; i < students.length; i++) {
  if (students[i].gender === "male" && students[i].age <= 21) {
    malePoints = malePoints + students[i].points;
  }
}
console.log("das;", malePoints);

let malePoints2 = 0;

for (let i = 0; i < students.length; i++) {
  if (students[i].gender === "male" && students[i].age >= 21) {
    malePoints2 = malePoints2 + students[i].points;
  }
}
console.log("asda;", malePoints2);

// 1. Өгөгдсөн array-гаас эхний объектыг хэвлэж гаргах
// 2. Ангид хэдэн эрэгтэй, эмэгтэй сурагч байгааг ол.
// 3. Сурагчдын насны дунджийг олох функц бичих
// 4. Нас нь 21-ээс дээш буюу тэнцүү сурагчдыг ол
// 5. 60-аас дээш оноо авсан cурагчдийг тоол
// 5. 21-аас доош настай эмэгтэй сурагчдын оноо авсан cурагчдийг тоол

// 6. 21-аас дttш настай эмэгтэй сурагчдын оноо авсан cурагчдийг тоол
// 7. 21-аас доош настай эрэгтэй сурагчдын оноо авсан cурагчдийг тоол
// 8. 21-аас дttш настай эрэгтэй сурагчдын оноо авсан cурагчдийг тоол
let oddcount = 0;
for (let i = 0; i < 142; i++) {
  // console.log("", i);
  let too = i;
}
while (too !== 0) {
  let digit = too % 10;
  if (digit % 2 === 1) {
    oddcount++;
  }
  too = (too - digit) / 10;
}
console.log("odd", oddcount);

let a1 = [1, 2, 3, 4, 5];
let b1 = [];
let j = 0;
for (let i = a1.length - 1; i >= 0; i--) {
  console.log(a1[i]);
  b1[j] = a1[i];
}
j++;

let a2 = [7, 8, 9];
let b2 = [];
j = 0;

for (let i = a2.length - 1; i >= 0; i--) {
  console.log(a2[i]);
  b2[j] = a2[i];
}
j++;

let products = [
  { name: "Гурил", price: 1500, quantity: 5 },

  { name: "Сүү", price: 3500, quantity: 2 },

  { name: "Өндөг", price: 500, quantity: 30 },

  { name: "Талх", price: 2000, quantity: 4 },

  { name: "Цагаан будаа", price: 4000, quantity: 3 },

  { name: "Элсэн чихэр", price: 3000, quantity: 2 },

  { name: "Давс", price: 1000, quantity: 1 },

  { name: "Цай", price: 5000, quantity: 2 },

  { name: "Самар", price: 8000, quantity: 1 },

  { name: "Жимс", price: 6000, quantity: 5 },

  { name: "Ногоо", price: 2500, quantity: 7 },

  { name: "Шоколад", price: 7000, quantity: 3 },
];

let goods = 0;

for (let i = 0; i < products.length; i++) {
  console.log("goods:", products[i].name);
}

let sumgoods = 0;

for (let i = 0; i < products.length; i++) {
  sumgoods = sumgoods + products.length;
}
console.log("sum;", sumgoods);

let sumprice = 0;
for (let i = 0; i < products.length; i++) {
  sumprice = sumprice + products[i].price;
}
console.log("sumprice:", sumprice);

let overprice = 0;

for (let i = 0; i < products.length; i++) {
  if (products[i].price >= 3000) {
    console.log("overprice:", products[i].name, products[i].price);
  }
}

let cheapestGoods = 0;

for (let i = 0; i < products.length; i++) {
  if (products[i].price <= 1500) {
    cheapestGoods++;
    console.log("cheapproducts:", cheapestGoods, products[i].name);
  }
}

let lessQuantity = 0;

for (let i = 0; i < products.length; i++) {
  if (products[i].quantity < 5) {
    lessQuantity++;
  }
  console.log({ lessQuantity }, products[i].name, products[i].quantity);
}

let maxQuantity = products[0];

for (let i = 1; i < products.length; i++) {
  if (maxQuantity.quantity < products[i].quantity) {
    maxQuantity = products[i];
  }
}
console.log("max, min:", maxQuantity);

let x = "Өндөг";
for (let i = 0; i < products.length; i++) {
  if (products[i] === x) {
    x = products[i];
    // } else products[i] === x;
    // console.log("iim buteegdhuun baihgui");
  }
}
console.log("x:", x);

let mass = [5, 7, 2, 3, 4];
let mass2 = [6, 8, 3, 4, 5];
let ret = 0;

// for (i = mass.length - 1; i >= mass.length; i--) {
//   console.log(mass[i]);
// }

// {
//   console.log(mass2[i]);
//   mass[j] = mass2[i];
// }
// j++;

const printName = (list) => {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
};

printName(products);

// const printSum = (list) => {
//   let asd = 0;
//   for (let i = 0; i < list.length; i++) {
//     asd = asd + list[i];
//     console.log(list[i].quantity);
//   }
// };

// 1. Өгөгдсөн бүтээгдэхүүний нэрийг хэвлэ.`
// 2. Өгөгдсөн бүтээгдэхүүний нийт тоо ширхэгийг ол
// 3. Өгөгдсөн бүтээгдэхүүний нийт үнийн дүнг ол
// 4. Өгөгдсөн бүтээгдэхүүний 3000₮-өөс дээш үнэтэй бүтээгдэхүүнүүдийг хэвлэ
// 5. Өгөгдсөн бүтээгдэхүүний хамгийн хямд бүтээгдэхүүний нэрийг олж хэвлэ
// 6. Өгөгдсөн бүтээгдэхүүний  хамгийн их тоо ширхэгтэй бүтээгдэхүүнийг хэвлэ
// 7. Өгөгдсөн бүтээгдэхүүний 5-аас доош үлдсэн бүтээгдэхүүнүүдийг жагсаах
// 8. Өгөгдсөн бүтээгдэхүүн дотор X бүтээгдэхүүн  байгаа эсэхийг шаалга байвал мэдээллийг нь хэвлэ
