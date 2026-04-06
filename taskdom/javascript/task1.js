// prime Number

// forloop

let num = 5;
let firstPrime = true;
for (let a = 2; a <= num; a++) {
  if (num % a == 0) {
    firstPrim = false;
    break;
  }
}

console.log(firstPrime);

// while loop

let nnum = 7;
let b = 3;
let isprime = true;
while (b < num) {
  if (num % b == 0) {
    isprime = false;
    break;
  }
  b++;
}

console.log(isprime);

// Do loop

let onenum = 5;
let c = 2;
let prime = true;

do {
  if (onenum % c == 0) {
    prime = false;
    break;
  }
  c++;
} while (c < onenum);

console.log(prime);

// even & odd number

// loop

for (let d = 1; d <= 10; d++) {

  console.log(d % 2 === 0 ? d + " is Even" : d + " is Odd");

}

// whild loop

let e =1;
while (e <= 10) {
    console.log(e % 2 ==0 ?  " is even" :" is odd ");
    e++;
}

// DO while loop

let f = 1;
do{
    console.log(f % (2 ==0 ? " is even " : " is odd"));
    f++;
} while (f <= 10);

// fibonacci series

 let i = 10;
 let g = 0;
 let h = 1;
 for (let z =1; z <=i; i++){
    console.log(g);
    let temp = g+h;
    g = h;
    h = temp;
 }

//  while loop

let j =10;
let Y = 0;
let x = 1; s = 1;
let o = 1;

//  while(o );
