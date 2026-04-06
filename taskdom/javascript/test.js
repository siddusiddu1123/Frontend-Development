//  operators

// arithmetic operators

let n = 5;
let o = 10;
let p = 15;
let q = 20;

let add = n + o;
let subtract = p - q;
let multiply = q * o;
let division = n / p;

console.log("Addition:", add);
console.log("Subtraction:", subtract);
console.log("Multiplication:", multiply);
console.log("Division:", division);

// comparison

let a = 100;
let b = "1000";

console.log(a == b);

let boy1 = 3000;
let boy2 = "3000";

console.log(boy1 == boy2);

// logical

let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed to enter");
} else {
  console.log("Not allowed");
}

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("You can relax");
} else {
  console.log("Go to work");
}

// ternary

let marks = 85;
let grade = (marks >= 90) ? "A" :
            (marks >= 75) ? "B" :
            (marks >= 50) ? "C" :
            "Fail";

console.log(grade); 

let man1 = 10, man2 = 20, man3 = 15;
let largest = (man1 > man2 && man1 > man3) ? "man1 is largest" :
              (man2 > man3) ? "man2 is largest" :
              "man3 is largest";

console.log(largest);

// comma

let result = (5 + 2, 10 + 5, 20 + 1);

console.log(result);

// unary operator

// unary plus (+) operator

// unary Minus (-)

