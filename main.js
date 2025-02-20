console.log("Сайн уу, JS!");

let message = "Hello, World!"; // String
console.log(message);

let age = 42; // Number
console.log(age);

let gpa = 4.5; // Number
console.log(gpa);

let isStudent = true; // Boolean
console.log(isStudent);

let x; // Undefined
console.log(x);

let n = null; // Null
console.log(n);

let a = 10;
let b = 20;

console.log("A=", a);
console.log("B=", b);

let summa = a + b;
console.log("a + b = ", summa);

let diff = a - b;
console.log("a - b = ", diff);

let mul = a * b;
console.log("a * b = ", mul);

let div = a / b;
console.log("a / b = ", div);

let mod = a % b;
console.log(mod);

console.log("a === b = ", a === b);
console.log("a !== b = ", a !== b);
console.log("a > b = ", a > b);
console.log("a < b = ", a < b);
console.log("a >= b = ", a >= b);
console.log("a <= b = ", a <= b);

console.log("a === b &&  a < b", a === b && a < b);
console.log("a !== b &&  a < b", a !== b && a < b);

console.log("a === b ||  a < b", a === b || a < b);
console.log("a !== b ||  a < b", a !== b || a < b);

let birthYears = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000];
let personNames = new Array(
  "Dorj",
  "Bat",
  "Naraa",
  "Saraa",
  "Tsetsgee",
  "Nar",
  "Sar",
  "Od",
  "Mundur",
  ["Halh", "Buriad"]
);

console.log("Birth: ", birthYears);
console.log("Names: ", personNames);

let kvadrat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("0: ", birthYears[0]);
console.log("1: ", birthYears[1]);
console.log("1: ", birthYears[1]);
console.log("1: ", birthYears[1]);
console.log("1: ", birthYears[1]);
console.log("1: ", birthYears[1]);

birthYears[9] = 2024;

console.log(birthYears);
console.log(birthYears.length);

for (let tooluur = 0; tooluur < 5; tooluur++) {
  console.log(tooluur);
}

let count = 1;
while (count <= 10) {
  console.log(count);
  count = count + 1; // ==> count++
}

let counter = 0;
do {
  console.log(counter);
  counter = counter + 1;
} while (counter < 5);

let sum = 0;
for (let i = 0; i < 10; i++) {
  console.log(i);
  sum = sum + i;
}

let niilber = 0;
let too = 1;

while (too < 10) {
  niilber = niilber + too;
  too++;
}

console.log("SUM = ", sum);
console.log("SUM = ", niilber);

let completed = false;

console.log(typeof completed);

let nas = 17;

if (nas >= 18) {
  console.log("Таны нас:", nas);
  console.log("Та насанд хүрсэн байна.");
}

if (nas >= 18) {
  console.log("Таны нас:", nas);
  console.log("Та насанд хүрсэн байна.");
} else {
  console.log("Таны нас:", nas);
  console.log("Та насанд хүрээгүй  харьж унт.");
}

let weekNumber = 6;
let weekName;

if (weekNumber === 1) {
  weekName = "Даваа";
} else if (weekNumber === 2) {
  weekName = "Мягмар";
} else if (weekNumber === 3) {
  weekName = "Лхагва";
} else if (weekNumber === 4) {
  weekName = "Пүрэв";
} else if (weekNumber === 5) {
  weekName = "Баасан";
} else if (weekNumber === 6) {
  weekName = "Бямба";
} else if (weekNumber === 7) {
  weekName = "Ням";
} else {
  weekName = "Буруу тоо";
}
console.log(weekName);

// 9.8 = > 9
Math.round(9.8);
Math.floor(9.8);
Math.ceil(9.8);

let c = 3;
let d = 5;
let e = 7;

perimeter = c + d + e;

console.log("bodlogo1 ", perimeter);

const toonuud = 1 + 3 + 5 + 7 + 8 + 7;
console.log("bodlogo 2 hariu", toonuud);

const h = 10;
const w = 5;

let talbai = h * w;
let talbaiPerimeter = (h + w) * 2;
console.log("bodlogo 3 hariu", talbai);
console.log("bodlogo 3 hariu", talbaiPerimeter);

let totalSec = 98;
let sec = 0;
let min = 0;

sec = totalSec % 60;
min = Math.floor(totalSec / 60);

console.log("Bodlogo-4: ugugdsun sec iig min sec hurvuul: ", totalSec);
console.log("Bodlogo-4 hariu: ", min + "min " + sec + "sec");

let Sumsec = 1297;
let hour = 0;
let minut = 0;
let secc = 0;

minut = Sumsec / 60;
minut = Math.floor(Sumsec % 3600) / 60;
hour = Math.floor(Sumsec / 3600);
secc = Sumsec % 60;

console.log("uldegdel-sec :", secc);
console.log("niit-minut :", minut);
console.log("bodlogo-5 : 1297 sec iig tsag ruu hurvuul:", minut);
console.log("niit-tsag:", hour);
console.log("bodlogo-5:", hour + "tsag" + minut + "min" + secc + "secund");

let Totalminut = 875;
let Totalsec = 88;
let ttlsec = 0;

Totalminut = 875 * 60;

console.log("niit secund :", Totalminut + "sec" + Totalsec + "uld sec");

let hours = 83;
let minuts = 88;
let seconds = 85;

let niitseconds = hours * 3600 + minuts * 60 + seconds;
console.log("niit secund bol:", niitseconds);

let f = 65;
z = 65 % 10;
console.log("uld:", z);
