let number1 = 3;
if (number1 % 2 === 1) {
  console.log("ogogdson too sondgoi:", number1);
} else {
  console.log("ogogdson too tegsh:", number1);
}

if (number1 % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

let nums = [3, 2, 7, 11];

for (let i = 0; i < 4; i++) {
  if (nums % 2 === 0) {
    console.log("even", nums[i]);
  } else {
    console.log("odd", nums[i]);
  }
}
let j = 0;
while (j < 4) {
  if (nums[j] % 2 === 0) {
    console.log("even", nums[j]);
  } else {
    console.log("odd", nums[j]);
  }
  j++;
}

let number2 = 2;
if (number2 % 2 === 1) {
  console.log("ogogdson too sondgoi:", number2);
} else {
  console.log("ogogdson too tegsh:", number2);
}

let number3 = 11;
if (number3 % 2 === 1) {
  console.log("ogogdson too sondgoi:", number3);
} else {
  console.log("ogogdson too tegsh:", number3);
}

let number4 = 7;
if (number4 % 2 === 1) {
  console.log("ogogdson too sondgoi:", number4);
} else {
  console.log("ogogdson too tegsh:", number4);
}

let diga = 9;
let digb = 3;
let digc = 2;
let digmin ;

if (diga <= digb && diga <= digc) {
  digmin = diga;
} else if (digb <= diga && digb <= digc) {
  digmin = digb ;    
} else if ( digc <= diga && digc <= digb)
  digmin = digc ;

  console.log ('bodlogo-1: hamgiin baga too :', digmin) ;


let dig1 = 7;
let dig2 = 1;
let dig3 = 12;
let digmax = 0;

if (dig1 >= dig2 && dig1 >= dig3) {
  digmax = dig1 ;
} else if (dig2 >= dig1 && dig2 >= dig3 ){
  digmax = dig2 ;
} else if (dig3 >= dig1 && dig3 >= dig2) {
  digmax = dig3 ;
} 

console.log ( 'bodlogo-2 : hamgiin ikh too :', digmax ) ; 


let tooa = 3;
let toob = 6;
let tooc = 9;

if (tooa < toob && tooa < tooc ) {
  console.log ("bodlogo-1 bagsh, hamgiin baga too:", tooa) ;
} else if (toob < tooa && toob < tooc) {;
  console.log ("hamgiin baga too :", toob) ;
} else if (tooc < tooa && tooc < toob) {
  console.log ("hamgiin baga too:", tooc) ; 
}

let n1 = 2;
let n2 = 9;
let n3 = 4;
let urjver = 1;

if (n1 < 5) {
  urjver *= n1;
}
if (n2 < 5) {
  urjver *= n2;
}
if (n3 < 5) {
  urjver *= n3;
} console.log ("urjver", urjver);




let sar = 9;

if (sar === 12 || sar === 1 || sar === 2) {
  console.log("ovol bn");
} else if (sar === 3 || sar === 4 || sar === 5) {
  console.log("havar bn");
} else if (sar === 6 || sar === 7 || sar === 8) {
  console.log("zun bn");
} else if (sar === 9 || sar === 10 || sar === 11) {
  console.log("namar bn");
} else {
  console.log("tanii oruulsan sariin too buruu bn.");
}


let numTotal = [1,2,3];

for (let i = 0; i < 4; i++) {
  if (nums % 2 === 0) {
    console.log("even", nums[i]);
  } else {
    console.log("odd", nums[i]);
  }
}

let numa = 11 ;
let numb = 9 ; 
let numc = 4 ;
let numd = 3 ; 
let mulmax = 1 ;

if (numa > 5) {
  mulmax *= numa ;
}
if (numb > 5) {
  mulmax *= numb ;
}
if (numc > 5) {
  mulmax *= numb 
}
if (numd > 5) {
  mulmax *= numd
}
console.log ( '5 aas ikh toonii urjver :', mulmax )

let bat = 67 ;
let ochir = 59 ;

if ( bat >=59 &&  bat < 60) {
  console.log ('muu' , bat) ;
} else if (bat >= 60 && bat < 70 ) {
  console.log ('hangalttai' , bat) ;
}

if (ochir >= 59 && ochir < 60) {
  console.log ('muu' , ochir) ;
} else if ('hangalttai' , ochir ) ;

const birthYears = [1994, 1997, 2003, 1993, 2001];
let currentYear = 2025 ;
ages = [];

for ( let i = 0; i < birthYears.length; i++) {
  ages.push(currentYear-birthYears[i]);
} console.log('nas', ages);


const numbers = [1, 2, 3, 4];

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] * 2;
} console.log('2 oor urjuulsen hariu:', numbers);

const numbera = [11, 22, 33, 44];
sumeven = 0;
for ( let i = 0;  i < numbera.length; i++) {
  if (numbera[i] % 2 === 0) {
    sumeven += numbera[i];
  }
} console.log ('array, tegsh toonii niilber:', sumeven);


let sumTot = 0;

for (let i = 0; i < numbers.length; i++) {
  sumTot += numbera[i] ;
} console.log ('buh toonii niilberuud', sumTot) ;

let avar = 0; 

for (let i = 0; i < numbera.length; i++) {
 if (avar += numbera[i] / 4 );
} console.log('dundaj:', avar);

const array1 = Array.from({length:100}, (_,i )=> i+1);
let arrayeven = 0;
for (let i = 0; i <array1.length; i++) {
  if (array1[i] %2 === 0) {
  arrayeven += array1[i] ;
  }
} console.log ('100 hurtelh toonii tegsh:' , arrayeven);

let arrayodd = 0; 

for (let i = 0; i < array1.length; i++) {
  if(array1[i] % 2 === 1) {
    arrayodd += array1[i] ;
  }
} console.log ('100 hurtelh toonii sondgoi niilberuud', arrayodd);

const arrayn = Array.from({length:200}, (_,i) => i+1);
let multeven = 1; 

for (let i = 0; i < arrayn.length; i++) {
  if (arrayn[i] % 2 === 0) {
      multeven *= arrayn[i] ;
  }
} console.log('n tegsh toonii niilber:', multeven);

let evenCount = 0;

for (let i = 0; i < arrayn.length; i++) {
  if (arrayn[i] % 2 === 0) {
    evenCount++ ;  
  }
} console.log( 'tegsh toonii shirheg:', evenCount); 