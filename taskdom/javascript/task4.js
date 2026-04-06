let marks = [
  78, 85, 90, 67, 88, 76, 95, 60, 72, 81, 69, 84, 91, 73, 77, 68, 89, 92, 66,
  80,
];

let sum = marks.reduce((a, b) => a + b, 0);
let highest = Math.max(...marks);
let lowest = Math.min(...marks);

console.log("Average:", sum / marks.length);
console.log("Highest:", highest);
console.log("Lowest:", lowest);

// print Pattern


for (let i =1;
    i <= 10;
    i++){
        let row = "";
        for (let j =1;
            j <= i;
            j++){
                row += j;
            }
        console.log(row);
    }

