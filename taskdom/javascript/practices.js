// Functions Study Path

// JavaScript Definitions
// Function declarations
// Function Expression
// Arrow Functions
// Function Constructors

//  Callbacks :

// A JavaScript callback is a function passed as an argument to another function,
//  which is then executed (or "called back") at a later point in time to complete a specific task.

// // function greet(name, callback) {
// //     console.log("Hi " + name);
// //     callback();
// // }

// // function sayBye() {
// //     console.log("Bye!");
// // }

// // greet("Siddaiah", sayBye);


<!DOCTYPE html>
<html>
<head>
    <title>Callback Example - Food Order</title>
</head>
<body>

<h1>🍔 Food Order System</h1>
<button onclick="placeOrder()">Place Order</button>

<p id="status"></p>

<script>

// Step 1: Order function
function takeOrder(order, callback) {
    document.getElementById("status").innerText = `Order received: ${order}`;
    
    // Simulate delay (kitchen cooking)
    setTimeout(function() {
        callback(order);
    }, 3000);
}

// Step 2: Cooking function
function prepareFood(order, callback) {
    document.getElementById("status").innerText = `Preparing ${order}...`;
    
    setTimeout(function() {
        callback(order);
    }, 3000);
}

// Step 3: Serve function
function serveFood(order) {
    document.getElementById("status").innerText = `✅ ${order} is ready! Enjoy your meal`;
}

// Main function (trigger)
function placeOrder() {
    takeOrder("Burger", function(order) {
        prepareFood(order, function(order) {
            serveFood(order);
        });
    });
}

</script>

</body>
</html>









// // Parameters (Function Input)
// // Parameters allow you to pass (send) values to a function.

// // Parameters are listed inside the parentheses in the function definition.


// // One Parameter

<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Functions</h1>

<p>Invoke (call) a function that converts from Fahrenheit to Celsius:</p>

<p id="demo"></p>

<script>
function toCelsius(farenheit) {
  return (5/9) * (farenheit-32);
}

// let value = toCelsius(77);

// document.getElementById("demo").innerHTML = "The value is " + value;
// </script>

// </body>
// </html>

// Multiple Parameters

// 
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Functions</h1>

<p>A function with two parameters.</p>

<p id="demo"></p>

<script>
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

let name = fullName("John", "Doe");

document.getElementById("demo").innerHTML = "The name is  " + name;
</script>

</body>
</html>

// Parameter Rules
// JavaScript function definitions do not specify data types for parameters.

// JavaScript functions do not perform type checking on the arguments.

// JavaScript functions do not check the number of arguments received.

// Incorrect Parameters
// Accessing a function with an incorrect parameter can return an incorrect answer:

<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Functions</h1>

<p>Accessing a function with incorrect parameters can return an incorrect answer:</p>

<p id="demo"></p>

<script>
function toCelsius(farenheit) {
  return (5/9) * (farenheit-32);
}

let value = toCelsius();

document.getElementById("demo").innerHTML = value;
</script>

</body>
</html>



// Returning Values from Functions
// A function can return a value back to the code that called it.

// The return statement is used to send a value out of a function.


// The return Statement
// When a function reaches a return statement, the function stops executing.

// The value after the return keyword is sent back to the caller.

<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Functions</h1>
<h2>The return Statement</h2>
<p>A function that returns a text:</p>

<p id="demo"></p>

<script>
function sayHello() {
  return "Hello World";
}

let message = sayHello();

document.getElementById("demo").innerHTML = message;
</script>

</body>
</html>
