// JavaScript Function

// default Parameters

function greet(name = " man") {
  console.log("hello" + name);
}
greet();
greet("siddu");

// Return statement

function sum(a, b) {
  return a + b;
}
let result = sum(5, 10);
console.log(result);

// Types of Functions

// Named Function

function marketing(marketingbudget) {
  let message = "our marketing budget is " + marketingbudget;
  let total = marketingbudget * 1.2;

  for (let i = 1; i <= 5; i++) {
    total += marketingbudget[i - 1];
  }
  let average = total / 5;
  console.log(message);
  console.log("Total marketing budget after 5 years: " + total);
  console.log("average marketing budget: " + average);
}
let marketingbudget = [1000, 1200, 1500, 1800, 2000];
marketing(marketingbudget);

// Anonymous Function

let students = [
  { name: "Siddu", marks: [80, 75, 90] },
  { name: "Bhavani", marks: [40, 50, 45] },
  { name: "Ram", marks: [88, 92, 85] },
  { name: "Sita", marks: [60, 65, 70] },
];

//  Calculate Average using Anonymous Function
students.forEach(function (student) {
  let total = 0;

  student.marks.forEach(function (mark) {
    total += mark;
  });

  student.average = total / student.marks.length;
});

//  Filter Passed Students (average >= 60)
let passedStudents = students.filter(function (student) {
  return student.average >= 60;
});

//  Sort Students by Average (Descending)
students.sort(function (a, b) {
  return b.average - a.average;
});

// Display Results using Anonymous Function
students.forEach(function (student) {
  console.log("Name: " + student.name);
  console.log("Average: " + student.average.toFixed(2));
  console.log("------------------------");
});

//  Show Passed Students
console.log("✅ Passed Students:");

passedStudents.forEach(function (student) {
  console.log(student.name + " - " + student.average.toFixed(2));
});

// Function Expression

let multiply = function (c, d) {
  resuld = c * d;
  return result;
};
console.log(multiply(50, 20));

// Arrow function

const calculatetotal = (price, tax) => {
  let total = 0;
  price.forEach((element) => {
    total += element;
  });
  total += tax;
  return total;
};
let prices = [1000, 2000, 1500];
let tax = 500;
console.log(calculatetotal(prices, tax));

// IIFE ( Immediately Invoked Function Expression)

(function () {
  let cart = [];
  function additem(item, price) {
    cart.push({ item, price });
  }
  function gettotal() {
    return cart.reduce(function (total, item) {
      return total + item.price;
    }, 0);
  }
  additem("laptop", 60000);
  additem("iphone", 150000);
  console.log("total price: " + gettotal());
})();

// callback function

function orderfood(food, callback) {
  console.log("order placed for " + food);
  setTimeout(() => {
    console.log(food + " is ready");
    callback();
  }, 5000);
}
function enjoyfood() {
  console.log("enjoy your food!");
}
orderfood("pizza", enjoyfood);

// constructor function

let employee = function (name, salary) {
  this.name = name;
  this.salary = salary;
  this.getdetails = function () {
    return this.name + " earns " + this.salary;
  };
};
let emp1 = new employee("siddu", 50000);
let emp2 = new employee("bhavani", 60000);
console.log(emp1.getdetails());
console.log(emp2.getdetails());

// Async function

function fetchUser() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve({ name: "Siddaiah", age: 25 });
    }, 2000);
  });
}

async function getUserData() {
  console.log("Loading...");

  let user = await fetchUser();

  console.log("Name:", user.name);
  console.log("Age:", user.age);
}

getUserData();

// Generator function

function* orderSteps() {
  yield "Order Received";
  yield "Preparing Food";
  yield "Out for Delivery";
  yield "Delivered";
}

let process = orderSteps();

console.log(process.next().value);
console.log(process.next().value);
console.log(process.next().value);
console.log(process.next().value);

// Recursion function

function printNumbers(n) {
  if (n === 0) return;

  printNumbers(n - 1);
  console.log(n);
}

printNumbers(5);

// Higher-order function

let products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 20000 },
  { name: "Headphones", price: 2000 },
];

// Higher-order functions: map, filter, reduce

// 1. Filter expensive products (>10000)
let expensive = products.filter(function (p) {
  return p.price > 10000;
});

// 2. Get product names
let names = products.map(function (p) {
  return p.name;
});

// 3. Calculate total price
let total = products.reduce(function (sum, p) {
  return sum + p.price;
}, 0);

console.log(expensive);
console.log(names);
console.log("Total:", total);

// Nested function

function bankAccount(name) {
  let balance = 0;

  function deposit(amount) {
    balance += amount;
    console.log("Deposited:", amount);
  }

  function showBalance() {
    console.log(name + " Balance:", balance);
  }

  deposit(1000);
  deposit(500);
  showBalance();
}

bankAccount("Siddaiah");

// Pure function

//

// default parameters

function createOrder(
  item = "Burger",
  quantity = 1,
  price = 100,
  deliveryCharge = 40,
) {
  let total = price * quantity + deliveryCharge;

  console.log("Item:", item);
  console.log("Quantity:", quantity);
  console.log("Price per item:", price);
  console.log("Delivery:", deliveryCharge);
  console.log("Total:", total);
  console.log("----------------------");
}

// Different cases
createOrder("Pizza", 2, 250, 50);
createOrder("Sandwich", 3);
createOrder();

// rest parameters function

function analyzeMarks(studentName, ...marks) {
  let total = marks.reduce(function (sum, mark) {
    return sum + mark;
  }, 0);

  let average = total / marks.length;

  let highest = Math.max(...marks);
  let lowest = Math.min(...marks);

  console.log("Student:", studentName);
  console.log("Marks:", marks);
  console.log("Total:", total);
  console.log("Average:", average.toFixed(2));
  console.log("Highest:", highest);
  console.log("Lowest:", lowest);
  console.log("------------------------");
}

// Multiple inputs
analyzeMarks("Siddaiah", 80, 90, 85, 88);
analyzeMarks("Ravi", 60, 70);
analyzeMarks("Sita", 95, 92, 98, 100, 97);
