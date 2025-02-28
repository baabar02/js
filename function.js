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
