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
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: 'male',
    points: 70,
  },
  {
    name: 'Индра',
    age: 19,
    gender: 'female',
    points: 50,
  },
  {
    name: 'Хатнаа ',
    age: 21,
    gender: 'male',
    points: 99,
  },
  {
    name: 'Тэмүүлэн',
    age: 23,
    gender: 'male',
    points: 55,
  },
  {
    name: 'Намуун',
    age: 23,
    gender: 'female',
    points: 85,
  },
];

let student1 = 0; 

for ( i = 0 ; i < students.length; i++ ) {

} console.log('object-1:', students[0] ) 

let male = 0; 

for (i = 0 ; i < students.length; i++) {
  if ( students[i].gender === 'male') {
    male = male + 1; 
  }
   
} console.log( 'male:', male);

let female = 0;

for (i = 0; i < students.length; i++) {
  if ('female' === students[i].gender) {
    female = female + 1 ;
  } 
} console.log ('female:', female) ;

let avarage = 0 ;
let avarageAge = 0 ;
for (i = 0 ; i < students.length; i++) {
    avarage = avarage + students[i].age ; 
    avarageAge = avarage / students[i] ;
  } console.log('total age:', students.length ) ;
    console.log('avarage age:', avarage) ; 
    console.log ('dundaj nas :',avarageAge) ;

let openbeer = [0]; 

for (i = 0 ; i < students.length; i++) {
if ( students[i].age >= 21 ) {
  openbeer = openbeer + students[i] ;
  } 
} console.log ('openbeer:', openbeer);




// 1. Өгөгдсөн array-гаас эхний объектыг хэвлэж гаргах
// 2. Ангид хэдэн эрэгтэй, эмэгтэй сурагч байгааг ол.
// 3. Сурагчдын насны дунджийг олох функц бичих
// 4. Нас нь 21-ээс дээш буюу тэнцүү сурагчдыг ол
// 5. 60-аас дээш оноо авсан cурагчдийг тоол

