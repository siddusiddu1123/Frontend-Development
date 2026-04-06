// JAVA SCRIPT Basic Loop Tasks

// Driving License Eligibility

let age = 16;
age <= 25;
age++;
{
  if (age >= 18) {
    console.log(age + " -> eligible for  the license");
  } else {
    console.log(age + " -> not eligible for the license");
  }
}

// Rain Weather Alert System

let rainfall = [20, 55, 30, 70, 10, 80, 40];

for (let i = 0; i < rainfall.length; i++) {
  if (rainfall[i] < 50) {
    console.log("Day " + (i + 1) + " -> we have Heavy Rain ");
  }
}

// Student grading System

let marks = [90, 75, 60, 40, 85, 55, 30, 95, 70, 45];

for (let i = 0; i < marks.length; i++) {
  let score = marks[i];
  let grade;
  if (score >= 80) console.log(score + " → Grade A");
  else if (score >= 60) console.log(score + " → Grade B");
  else if (score >= 50) console.log(score + " → Grade C");
  else console.log(score + " → Fail");
}

// Temperature monitoring System

let hourlyTemps = [-2, 2, 5, 12, 18, 22, 27, 30, 28, 24, 18, 14];

for (let i = 0; i < hourlyTemps.length; i++) {
  let temp = hourlyTemps[i];
  let status;

  if (temp < 0) temp = ["Freezing"];
  else if (temp <= 15) status = ["Cold"];
  else if (temp <= 25) status = ["Pleasant"];
  else status = "Hot";

  console.log("Hour :{i + 1}: :{temp}°C is :{status}");
}

// A T M

// let correctpin = "1234";
// let userAccount = false;
// for (let attempt =1;
//       attempt <=3;
//     attempt++){
//         let input = "0000";
//         if (input === correctpin){
//             console.log(" access granted processing withdrawal");
//             userAccount =true;
//             break;
//         } else{
//             console.log("Incorrect pin. attempt :{ attempt} of 3");
//         }
//     }
//     if ( userAccount) {
//         console.log("account locked. please contact your bank.");
//     }

let correctPin = 1234;
let attempts = 0;

while (attempts < 3) {
  let enteredPin = 1234; // change to test

  if (enteredPin === correctPin) {
    console.log("Access Granted");
    break;
  } else {
    console.log("Wrong PIN");
  }

  attempts++;
}

if (attempts === 3) {
  console.log("Account Blocked");
}

// traffic Signal

for (let i = 1;
   i <= 5;
    i++) {
  console.log("Red → Stop");
  console.log("Yellow → Ready");
  console.log("Green → Go");
  console.log("------");
}

// electricity bill 

let units = [50, 150, 250, 90];

for (let i = 0; 
  i < units.length;
  i++) {
    if (units[i] < 100) {
        console.log(units[i] + " → Low Usage");
    } else if (units[i] <= 200) {
        console.log(units[i] + " → Medium Usage");
    } else {
        console.log(units[i] + " → High Usage");
    }
}

