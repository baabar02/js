console.log("functions");

let x = 100;

if (x % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

let arr = [1, 2, 3, 4, 5];

for (let index = 0; index < arr.length; index++) {
  if (x % 2 === 0) {
    console.log("even", arr[index]);
  } else {
    console.log("odd", arr[index]);
  }
}

function tegsOrSondgoi(inputNumber) {
  if (x % 2 === 0) {
    console.log("even", inputNumber);
  } else {
    console.log("odd", inputNumber);
  }
}
console.log("========");

let arr2 = [7, 8, 9, 10];
for (let index = 0; index < arr2.length; index++) {
  tegsOrSondgoi(arr2[index]);
}

function isEven(inputNumber) {
  if (inputNumber % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let y = isEven(11);
console.log(y);

// let a = 1;
// let b = 2;

// function math(a, b) {
//   return a * b;
// }
// math(b);
// console.log("*", b);

//es5 //declaration
function nemeh(a, b) {
  return a + b;
}
// let result = nemeh(5, 6);
// console.log(result);

nemeh();
let result = nemeh(10, 20);
let sum = 1000; //declaration
// console.log("add", result);

//es6
//arrow function

//expression bichiglel
const add = (a, b) => {
  return a + b;
};
let urdin = add(50, 60);
console.log("arrow add", urdin);
add();

const kira = {
  age: 25,
};

const boloro = { ...kira }; //{kira: {age:25}}
boloro.age = 30;

console.log(boloro);
console.log(kira);
