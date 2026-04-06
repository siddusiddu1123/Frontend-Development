// arry method

// Array length

let arr = [1, 2, 3];
console.log(arr.length);

// Array toString

let arra = [10, 20, 30];
console.log(arra.toString());

// Array jion

let array = ["Hello", "ramu"];
console.log(array.join(" "));

// Array delete

let dele = [30, 40, 50];
delete arr[1];
console.log(arr);

// Array concat

let a = [10, 30];
let b = [40, 50];
let result = a.concat(b);
console.log(result);

// Array flat

let array1 = [1, [2, 3], [4, [5]]];
console.log(array1.flat());
console.log(array1.flat(2));

// Array push 

let array2 = [1, 2];
array2.push(3);
console.log(array2);

// Array unshift

let array3 = [1, 2, 3];
array3.unshift(1);

// Array pop

let array4 = [1, 2, 3, 4, 5, 6];
array4.pop();
console.log(array4);

// Array shift

let array5 = [1, 2, 3, 4];
array5.shift();
console.log(array5);

// Array some\

let array6 = [10, 20, 30, 40];
let ans = array6.some((x) => x > 25);
console.log(ans);

// Array filter

let array7 = [15, 25, 35, 45];
let answer = array7.filter((x) => x > 15);
console.log(answer);

// Array reduce

let array8 = [0, 9, 8, 7];
let sum = array8.reduce((total, num) => total + num, 0);
console.log(sum);

// Array reverse

let array9 = [9, 6, 5, 1];
array9.reverse();
console.log(array9);

// Array values

let array10 = ["A", "B", "C", "D"];
let iterator = array10.values();
for (let values of iterator) {
  console.log(values);
}
