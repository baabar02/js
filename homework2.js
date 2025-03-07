let x = 1234;
let digit = 0;
let s = 0;

while (x !== 0) {
  digit = x % 10;
  // davtalt 1: 123 4 sugarav
  s = s * 10 + digit;
  // 0 baigaa s deer 4 ochiv, 10 aar urjuulahed 40 +  2 dahi davtaltiin 3 = 43
  x = Math.floor(x / 10);
  // 1234 iig 123.4 bolgov ? asuuh/
}

console.log("bodlogo 1 urvuu too:", s);

let x1 = 2345;
let s1 = 0;
let reverse = 0;
while (x1 !== 0) {
  s1 = x1 % 10; // i = 0, 5
  reverse = reverse * 10 + s1;
  x1 = (x1 - s1) / 10; // 234
}
console.log("bodlogo 2 urvuu too :", s1);
console.log("rev", reverse);

let x2 = 4;
result = 0;
let hurd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 1; i <= 10; i++) {
  result = x2 * hurd;
}
console.log(`4 hurd`, result);

let x3 = 2;

if (x3 >= 2 || x3 / 2 === 0) {
  console.log("not prime number", x3);
} else if (x3 <= 1 || x3 / 2 === 1) {
  console.log("prime number", x3);
}

let arr = [2, 3, 5, 8, 3];
let x4 = 3;
let count = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i] === x4) {
    count = count + 1;
  }
}
console.log("x=3", count);

let arr1 = [4, 5, 6, 7, 8];
let digit2 = 0;
let s2 = 0;

for (let i = 0; i < arr1.length; i++) {
  digit2 = arr1[i] % 2;
  s2 = s2 * 10 + arr1[i];
}
console.log("arr2 urvuu", s2);

let arr3 = [2, 3, 7, 5, 1, -1];
let min = arr[0];

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
  if (min > arr3[i]) {
    min = arr3[i];
  }
}
console.log("min", min);

let arr2 = [30, 90, 10, 40, 20];
let s3 = [0];

for (let i = 0; i < arr2.length; i++) {
  for (let j = i + 1; j < arr2.length; j++) {}
  {
  }
  console.log("sss", s3);
}
// es5
var z = 121; // scope global
//es6
let a = 90;
const y = 100;

console.log(z);
console.log(a);
console.log(y);

if (z > y);
{
  //block scope
  console.log(z);
  console.log(a);
  console.log(y);

  var r = 10;
  let g = 20;
  const h = 30;
}

let arr4 = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

// console.log(arr4[0][0]);
// console.log(arr4[0][1]);
// console.log(arr4[0][2]);

// for (let r = 0; r < arr4.length; r++) {
//   for (let c = 0; c < arr4.length; c++) {
//     console.log(arr4[r][c]);
//   }
// }

let ar1 = [2, 1, 9, 5, 7];
let count1 = 0;
//sort => buble sort
for (let i = 0; i < ar1.length; i++) {
  for (let j = i + 1; j < ar1.length; j++) {
    if (ar1[i] > ar1[j]) {
      let temp = ar1[i];
      ar1[i] = ar1[j];
      ar1[j] = temp;
    }
    count1++;
  }
}
console.log("count", count1);
console.log("sorted", ar1);
