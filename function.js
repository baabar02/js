// console.log("functions");

// let x = 100;

// if (x % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// let arr = [1, 2, 3, 4, 5];

// for (let index = 0; index < arr.length; index++) {
//   if (x % 2 === 0) {
//     console.log("even", arr[index]);
//   } else {
//     console.log("odd", arr[index]);
//   }
// }

// function tegsOrSondgoi(inputNumber) {
//   if (x % 2 === 0) {
//     console.log("even", inputNumber);
//   } else {
//     console.log("odd", inputNumber);
//   }
// }
// console.log("========");

// let arr2 = [7, 8, 9, 10];
// for (let index = 0; index < arr2.length; index++) {
//   tegsOrSondgoi(arr2[index]);
// }

// function isEven(inputNumber) {
//   if (inputNumber % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let y = isEven(11);
// console.log(y);

// // let a = 1;
// // let b = 2;

// // function math(a, b) {
// //   return a * b;
// // }
// // math(b);
// // console.log("*", b);

// //es5 //declaration
// function nemeh(a, b) {
//   return a + b;
// }
// // let result = nemeh(5, 6);
// // console.log(result);

// nemeh();
// let result = nemeh(10, 20);
// let sum = 1000; //declaration
// // console.log("add", result);

// //es6
// //arrow function

// //expression bichiglel
// const add = (a, b) => {
//   return a + b;
// };
// let urdin = add(50, 60);
// console.log("arrow add", urdin);
// add();

// const kira = {
//   age: 25,
// };

// const boloro = { ...kira }; //{kira: {age:25}}
// boloro.age = 30;

// console.log(boloro);
// console.log(kira);

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
  

const nameIt = (products) => {
    for (let i = 0; i < products.length; i++)
    console.log('ners:',products[i].name);
} ; 
nameIt(products) ;

const sumOfelements = (products) => {
    return products.length;
};

const sum = sumOfelements(products) ;
console.log('sum of elements:', sum);

sumOfelements(products) ;

const totalprice = (products) => {
    let sumprice = 0; 
    for (let i = 0; i < products.length; i++) {
    sumprice = sumprice + (products[i].price * products[i].quantity);
    }
    console.log('Total of price:', sumprice);
    return sumprice;
} ;

totalprice(products);

const over3000 = (products) => {
    let x = 0;
    for (let i = 0; i < products.length; i++){
        if (products[i].price >= 3000) {
            x = x + products[i].price ;
        }
    }
    console.log('over 3000 goods:', x);
    return x;
};

over3000(products);


const minPrice = (products) => {
    let cheapest = products[0];
    for (let i = 0; i < products.length; i++) {
        if ( cheapest.price > products[i].price) {
            cheapest = products[i];
        }
    } console.log('cheapest goods:', cheapest);
      return cheapest;  
};

minPrice(products);

const maxPrice = (products) => {
    let highest = products[0]; 
    for (let i = 0; i < products.length; i++) {
        if (highest.price < products[i].price) {
            highest = products[i];
        }
    } console.log('highest goods:', highest);
    return highest;
} ;

maxPrice(products);

const overGoods = (products) => {
    let lot = products[0];
    for (let i = 0; i < products.length; i++) {
        if (lot.quantity < products[i].quantity) {
            lot = products[i];
        } 
    } console.log('over quantity:', lot);
      return lot;     
}

overGoods(products);

const less5 = (products) => {
     lower = [0];
 for (let i = 0; i < products.length; i++) {
        if ( products[i].quantity < 5) {
            lower++;
            console.log('goods that lower than 5:', products[i].name);
        }  
    }  
} 

less5(products);

const orange = (products) => {
    let x = 'Гурил';
    for (let i = 0; i < products.length; i++) {
        if(x === products[i].name) {
            x = products[i];
            console.log('baival', x); 
        } 
        else {
            console.log('baihgui bol:', "iim buteegdhuun oldsongui");
            
        } 
    } 
}

orange(products);
  
let set1 = [5, 7, 2, 3, 4];
let set2 = [6, 8, 3, 4, 5];

const merge = (list1, list2) => {
    let combinedElements = [];
    for(let i = 0; i < list2.length; i++) {
        if (list1[i] !== list2[i]) {
            combinedElements = combinedElements + list2[i];  
        }
    }
    console.log('new list:', combinedElements);
    return combinedElements;
}
merge(set1, set2);


// 1. Өгөгдсөн бүтээгдэхүүний нэрийг хэвлэ.`
// 2. Өгөгдсөн бүтээгдэхүүний нийт тоо ширхэгийг ол
// 3. Өгөгдсөн бүтээгдэхүүний нийт үнийн дүнг ол
// 4. Өгөгдсөн бүтээгдэхүүний 3000₮-өөс дээш үнэтэй бүтээгдэхүүнүүдийг хэвлэ
// 5. Өгөгдсөн бүтээгдэхүүний хамгийн хямд бүтээгдэхүүний нэрийг олж хэвлэ
// 6. Өгөгдсөн бүтээгдэхүүний  хамгийн их тоо ширхэгтэй бүтээгдэхүүнийг хэвлэ
// 7. Өгөгдсөн бүтээгдэхүүний 5-аас доош үлдсэн бүтээгдэхүүнүүдийг жагсаах
// 8. Өгөгдсөн бүтээгдэхүүн дотор X бүтээгдэхүүн  байгаа эсэхийг шаалга байвал мэдээллийг нь хэвлэ

const employees = [

  { id: 1, name: "Бат", age: 25, position: "Developer", salary: 2500000 },

  { id: 2, name: "Сараа", age: 30, position: "Manager", salary: 3500000 },

  { id: 3, name: "Дорж", age: 22, position: "Intern", salary: 1000000 },

  { id: 4, name: "Тэмүүлэн", age: 40, position: "CEO", salary: 6000000 },

  { id: 5, name: "Одмаа", age: 28, position: "Designer", salary: 2700000 },

  { id: 6, name: "Ганбаа", age: 35, position: "HR", salary: 2200000 },

  { id: 7, name: "Мөнхөө", age: 29, position: "QA Engineer", salary: 2400000 },

  { id: 8, name: "Номин", age: 33, position: "Project Manager", salary: 3700000 },

  { id: 9, name: "Хишигээ", age: 24, position: "Marketing", salary: 2300000 },

  { id: 10, name: "Төгөлдөр", age: 27, position: "Backend Developer", salary: 2800000 }

];

const employeesName = (employees) => {
    for (let i = 0; i < employees.length; i++) {
        console.log('names:', employees[i].name)
    }
}

employeesName(employees)

const employeesAvarage = (employees) => {
    let sumAge = 0;
    for (let i = 0; i < employees.length; i++) {
        sumAge = sumAge + (employees[i].age / employees.length)

    } console.log('sum age:', sumAge);  
}

employeesAvarage(employees)

const over30 = (employees) => {
    let old= [0]; 
    for (let i = 0; i < employees.length; i++) {
        if ( employees[i].age >= 30) {
            old = old + employees[i].name;
        }   
    }   
    console.log('over30s :', old);
    return old;
}

over30(employees)

const findDev = (employees) => {
    let dev1 = 0; 
    for (let i = 0; i < employees.length; i++) {
        if ( employees.length === dev1); {
            dev1 = employees[i];
        }
    } 
    console.log('find Dev', dev1)
}

findDev(employees)

const TotalEmployees = (employees) => {
    let totEmp = 0;
    for (let i = 0; i < employees.length; i++) {
        totEmp++;
    }
    console.log('total employees:', totEmp);
} 

// TotalEmployees(employees)

// const increase10 = (employees) => {
//         let increased = [0];
//     for (let i = 0; i < employees.length; i++){
//         let newSalary = [0];
//         newSalary = employees[i].salary * 1.10;          
//         increased += newSalary;
//     } 
//     console.log ('increased salary:', increased)
//         return increased;
// }

// increase10(employees);

const increase10 = (employees) => {
    let increased = [0];
for (let i = 0; i < employees.length; i++){
    let newSalary = [0];
    newSalary = employees[i].salary * 1.10;          
    // employees[i].salary = newSalary;
} 
    // console.log ('increased salary:', newSalary)
   
}

increase10(employees);

sumSalary = (employees) => {
    let sumpay = 0;
    for (let i = 0; i < employees.length; i++) {
        sumpay = sumpay + employees[i].salary ;
      
    }
    console.log('total salary:', sumpay);
    return sumpay;
}

sumSalary(employees)

selected = (employees, x) => {

    for (let i = 0; i < employees.length; i ++) {
        if (employees[i].name === x);
        console.log('employees x:', employees[i]);
        return employees[i];
        
    }
    console.log('not found x :', );
    return false;
    
}

selected(employees, 'Бат')


// let ar1 = [2, 1, 9, 5, 7];
// let count1 = 0;
// //sort => buble sort
// for (let i = 0; i < ar1.length; i++) {
//   for (let j = i + 1; j < ar1.length; j++) {
//     if (ar1[i] > ar1[j]) {
//       let temp = ar1[i];
//       ar1[i] = ar1[j];
//       ar1[j] = temp;
//     }
//     count1++;
//   }
// }
// console.log("count", count1);
// console.log("sorted", ar1);

sort1 = (employees) => {
    
    for (let i = 0; i < employees.length; i++) {
        console.log(`asss,${i + 1}`);   //asuuh ?
        
        for (let j = i + 1; j < employees.length; j++){
            if (employees[i].age > employees[j].age ) {
                let temp = employees[i];
                employees[i] = employees[j];
                employees[j] = temp;
            }
        }
    } 
    console.log('sort', employees);
    
    return employees;
}

sort1(employees)

position1 = (employees) => {
    let positions = [];
    for (i = 0; i < employees.length; i++){
        positions.push(employees[i].position);
        console.log(`position: ${employees[i].position}`);
    }
    return positions;
    
}

let result = position1(employees);
console.log('all positions:', result);

position1(employees)


sumSalary = (employees) => {
    let sumpay = 0;
    for (let i = 0; i < employees.length; i++) {
        sumpay = sumpay + employees[i].salary ;
      
    }
    let avSalary = sumpay/employees.length;
    console.log('total salary:', sumpay);
    console.log('avarage salary', avSalary)
    return sumpay, avSalary;
} 

sumSalary(employees)


printTrade = (employees) => {


}
printTrade(employees)


countPosition = (employees) => {
    let positionCount = [];
    for (i = 0; i < employees.length; i++) {
       let position = employees[i].position;
       positionCount[position] = (positionCount[position] || 0) + 1;
    } 
    console.log(positionCount);
    for (let i = 0; i < positionCount.length; i++) {
        console.log('position:', positionCount[i]); //asuuh ?
        
    }
    return positionCount;
    
}

countPosition(employees)

array2 = (employees) => {
    let secondArray = [];
    for (i = 0; i < employees.length; i++) {
        secondArray.push(employees[i].name  + " " + employees[i].position + " " + employees[i].age) 
    } console.log("new array:", secondArray);
    return secondArray;
} 


array2(employees);

const checkEmployees = (employees, x) => {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === x) {
            console.log("Employee found:", employees[i]);
            return employees[i];
        }
    }
    console.log('Employee not found for id:', x);
    return [];

};

checkEmployees(employees, 11);  

less25 = (employees) => {
    let youngers = []; 
    for (let i = 0; i <employees.length; i++) {
        if (employees[i].age < 25 && employees[i].salary < 3000000)
            youngers.push(employees[i])
    } console.log ( 'youngers:', youngers)
    return youngers; 
}

less25(employees)

selectedAge = (employees) => {
    let selected = [];
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].age >= 25 && employees[i].age <= 35) {
            selected.push(employees[i])
        }
    } console.log('selected age:', selected);
      return selected;

}

selectedAge(employees)

sortSalary = (employees) => {
    let salarySort = [...employees];
    for (let i = 0; i < salarySort.length; i++) {
        for (let j = i + 1; j < salarySort.length; j++) {
            if ( salarySort[j].salary < salarySort[i].salary ) {
                let temp = salarySort[i];
                salarySort[i] = salarySort[j];
                salarySort[j] = temp 
            }
        }
    }   console.log('sorted by salary:', salarySort);
     return salarySort
}

sortSalary(employees)
console.log("String");

const text = "Hello Pinecone. Welcome to the world of JavaScript.";
console.log(text[0]);

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

for (let char of text) {
  console.log(char);
}

for (let i in text) {
  console.log(text[i]);
}

console.log(text.charAt(0));
console.log(text.charCodeAt(0));
console.log(text.includes("Pinecone"));

const str = "   Hello Pinecone Academy";
// TRIM, Replace, Split,  Substring,  Concat,
console.log(str);
console.log(str.trim());

const newStr = str.replace("Hello", "Welcome");
console.log(newStr);
console.log(str);

const arr = str.trim().replace("Hello", "Welcome").toLowerCase().split(" ");
const subStr = str.substring(6, 12);

console.log(subStr);
console.log(arr);
const i = str.indexOf("Pineconee");
console.log(i);
console.log(str.substring(i, i + 8));

const str1 = "Hello";
const str2 = "Pinecone";

// 1. Өгөгдсөн string-үүдийг нэгтгэх функц бич.

const myConcat = (str1, str2) => {
  console.log(str1, str2);
  return str1 + str2;
};
// rest parameter
const myConcat1 = (...params) => {
  const res = "";
  //   for (let i = 0; i < params.length; i++) {
  //     res = res + params[i];
  //   }
  for (let param of params) {
    res = res + param;
  }
  return res;
};

const result = myConcat("Hello", "Pinecone", "Academy");
console.log(result);

// includes
// 2. Өгөгдсөн string-д өгөгдсөн тэмдэгт байгаа эсэхийг шалгах функц бич.
const isExistChar = (text, char) => {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === char) {
      return true;
    }
  }
  return false;
};

const indexOf = (text, char) => {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === char) {
      return i;
    }
  }
  return -1;
};
const res = indexOf("Hello Pinecone", "K");
console.log("Hello Pinecone");
console.log(res);
// 3. Өгөгдсөн string-д өгөгдсөн тэмдэгт байгаа тоог олох функц бич.

// Ажилчдын нэрсийг дарааллаар хэвлэх функц бич.
// Ажилчдын дундаж насыг олох функц бич.
// 30-аас дээш настай ажилчдыг шүүж олох функц бич.
// Developer албан тушаалтай ажилчдыг олох функц бич.
// Нийт ажилчдын тоог хэвлэх функц бич.
// Бүх ажилчдын цалинг 10%-иар нэмэгдүүлэх функц бич.
// Бүх ажилчдын нийт цалингийн нийлбэрийг олох  функц бич.
// Тухайн нэртэй ажилтан байгаа эсэхийг шалгах функц бич.
 
// console.log("Homework: Object");

// const employees = [
// 	{ id: 1, name: "Бат", age: 25, position: "Developer", salary: 2500000 },
//   { id: 2, name: "Сараа", age: 30, position: "Manager", salary: 3500000 },
//   { id: 3, name: "Дорж", age: 22, position: "Intern", salary: 1000000 },
//   { id: 4, name: "Тэмүүлэн", age: 40, position: "CEO", salary: 6000000 },
//   { id: 5, name: "Одмаа", age: 28, position: "Designer", salary: 2700000 },
//   { id: 6, name: "Ганбаа", age: 35, position: "HR", salary: 2200000 },
//   { id: 7, name: "Мөнхөө", age: 29, position: "QA Engineer", salary: 2400000 },
//   {
//  &nbsp;&nbsp; id: 8,
//  &nbsp;&nbsp; name: "Номин",
//  &nbsp;&nbsp; age: 33,
//  &nbsp;&nbsp; position: "Project Manager",
//  &nbsp;&nbsp; salary: 3700000,
//   },
//   { id: 9, name: "Хишигээ", age: 24, position: "Marketing", salary: 2300000 },
//   {
//  &nbsp;&nbsp; id: 10,
//  &nbsp;&nbsp; name: "Төгөлдөр",
//  &nbsp;&nbsp; age: 27,
//  &nbsp;&nbsp; position: "Backend Developer",
//  &nbsp;&nbsp; salary: 2800000,
//   },

// ];

// // 1. Өгөгдсөн ажилчдын мэдээллийг дарааллаар нь хэвлэх функц
// function printEmployee(employee) {
//   console.log(
//  &nbsp;&nbsp; `Name: ${employee.name}, age: ${employee.age}, position: ${employee.age}, salary: ${employee.salary}`
//   ); // template string

//   // console.log(
//   //&nbsp;&nbsp; "Name: " +
//   //&nbsp;&nbsp;&nbsp;&nbsp; employee.name +
//   //&nbsp;&nbsp;&nbsp;&nbsp; ", age: " +
//   //&nbsp;&nbsp;&nbsp;&nbsp; employee.age +
//   //&nbsp;&nbsp;&nbsp;&nbsp; ", position: " +
//   //&nbsp;&nbsp;&nbsp;&nbsp; employee.age
//   // );
// }



// // 2. Өгөгдсөн наcны утгаар ажилчдыг хайх функц
// function findEmployeesByAge(age) {
//   const findEmployees = [];
//   let findIndex = 0;
//   for (let i = 0; i < employees.length; i++) {
//  &nbsp;&nbsp; if (employees[i].age >= age) {
//  &nbsp;&nbsp;&nbsp;&nbsp; findEmployees[findIndex] = employees[i];
//  &nbsp;&nbsp;&nbsp;&nbsp; findIndex++;
//  &nbsp;&nbsp; }
//   }
//   return findEmployees;
// }

// // 3. Өгөгдсөн наcны утгаар ажилчдыг хайх функц
// function averageAge() {
//   let sum = 0;
//   for (let i = 0; i < employees.length; i++) {
//  &nbsp;&nbsp; sum += employees[i].age;
//   }
//   return sum / employees.length;
// }

// //4. Developer албан тушаалтай ажилчдыг олох функц бич.
// function countByPosition(position) {
//   let count = 0;
//   for (let i = 0; i < employees.length; i++) {
//  &nbsp;&nbsp; if (employees[i].position === position) {
//  &nbsp;&nbsp;&nbsp;&nbsp; count++;
//  &nbsp;&nbsp; }
//   }
//   return count;
// }

// //5. Нийт ажилчдын тоог хэвлэх функц бич.
// function countEmployees() {
//   return employees.length;
// }

// // Бүх ажилчдын цалинг 10%-иар нэмэгдүүлэх функц бич.
// function increaseSalary() {
//   for (let i = 0; i < employees.length; i++) {
//  &nbsp;&nbsp; employees[i].salary += employees[i].salary * 0.1;
//   }
// }

// //6. Бүх ажилчдын нийт цалингийн нийлбэрийг олох&nbsp; функц бич.
// function sumSalary() {
//   let sum = 0;
//   for (let i = 0; i < employees.length; i++) {
//  &nbsp;&nbsp; sum += employees[i].salary;
//   }
//   return sum;
// }

// //7. Тухайн нэртэй ажилтан байгаа эсэхийг шалгах функц бич.
// function isEmployeeExist(name) {
//   for (let i = 0; i < employees.length; i++) {
//  &nbsp;&nbsp; if (employees[i].name === name) {
//  &nbsp;&nbsp;&nbsp;&nbsp; return true;
//  &nbsp;&nbsp; }
//   }
//   return false;
// }


// // Bodoltuudiin hariu shalgah
// for (let i = 0; i < employees.length; i++) {
//   printEmployee(employees[i]);
// }

// // 1. bodlogiin hariu shalgah
// const findEmployees = findEmployeesByAge(30);
// console.log("FIND:", findEmployees);

// // 2. bodlogiin hariu shalgah
// const avgAge = averageAge();
// console.log("AVG AGE:", avgAge);

// // 3. bodlogiin hariu shalgah
// console.log(employees);

// const countDeveloper = countByPosition("Developer");
// console.log("Developer count:", countDeveloper);

// // 4. bodlogiin hariu shalgah
// const count = countEmployees();
// console.log("Count:", count);

// // 5. bodlogiin hariu shalgah
// increaseSalary();
// console.log(employees);

// // 6. bodlogiin hariu shalgah
// const sum = sumSalary();
// console.log("Sum:", sum);

// // 7. bodlogiin hariu shalgah
// const isExist = isEmployeeExist("Бат");
// console.log("Is exist:", isExist);

// // 7. bodlogiin hariu shalgah
// const isExist2 = isEmployeeExist("Бат2");
// console.log("Is exist:", isExist2);
