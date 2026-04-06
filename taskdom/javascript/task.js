// task-1

// loop

let temps = [10, 15, 20, 25];

for (let a = 0; a < temps.length; a++) {
  let temp = temps[a];

  if (temp > 35) {
    console.log(temp + "°C -> Mode: Turbo Cool (Maximum power)");
  } else if (temp > 25) {
    console.log(temp + "°C -> Mode: Normal Cooling");
  } else if (temp >= 20) {
  } else {
    console.log(temp + "°C -> Mode: Heating / Standby");
  }
}

// while loop

let temp = [10, 15, 20, 25];
let b = 0;

while (b < temp.length) {
  let temp = temps[b];

  if (temp > 35) {
    console.log(temp + "°C -> Mode: Turbo Cool (Maximum power)");
  } else if (temp > 25) {
    console.log(temp + "°C -> Mode: Normal Cooling");
  } else if (temp >= 20) {
    console.log(temp + "°C -> Mode: Fan Only");
  } else {
    console.log(temp + "°C -> Mode: Heating / Standby");
  }

  b++;
}

// do while Loop

let tem = [10, 15, 20, 25];
let c = 0;

do {
  let tem = tem [c];

  if (tem > 35) {
    console.log(tem + "°C -> Mode: Turbo Cool (Maximum power)");
  } else if (tem > 25) {
    console.log(tem + "°C -> Mode: Normal Cooling");
  } else if (tem >= 20) {
    console.log(tem + "°C -> Mode: Fan Only");
  } else {
    console.log(tem + "°C -> Mode: Heating / Standby");
  }

  c++;
} while (c < tem.length);

// switch case

let month = "November";

switch (month) {
  case "November":
  case "December":
  case "January":
  case "February":
  case "March":
    console.log("It's Winter season.");
    break;

  case "July":
  case "August":
  case "September":
  case "October":
    console.log("It's Rainy season.");
    break;

  case "April":
  case "May":
  case "June":
    console.log("It's Summer season.");
    break;

  default:
    console.log("Unknown season");
}

// 
        