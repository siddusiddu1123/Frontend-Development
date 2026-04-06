// slice ()

let str ="HelloWorld";
console.log(str.slice(0,5));

// Substring ()

let str1 =" Hello Ram";
console.log(str1.substring(1,6));

// Substr ()

let str2 =" Hii Siddu";
console.log(str2.substr(1,5));

// Replace ()

let str3 ="ram is a good boy";
console.log(str3.replace("ram","shyam"));


// To Uppercase ()

let str4 =" Hello Everyone";
console.log(str4.toUpperCase());

// To Lowercasae ()

let str5 ="HELLO EVERYONE";
console.log(str5.toLowerCase());

// Concat ()

let str6 ="Welocome";
let str7 ="to javascript";
console.log(str6.concat(" ",str7));


// Tim ()

let str8 =" Hello sid is a good boy";
console.log(str8.trim());

// Timstart ()

let str9 =" Hello sid is a good boy";
console.log(str9.trimstart);


// Timend ()

let str10 ="Hello  ";
console.log(str10.trimEnd());


// Pad start ()

let str11 =" 50";
console.log(str11.padStart(5, "0"));


// pad end ()

let str12 ="50  ";
console.log(str12.padEnd(5, "0"));

// charAt ()

let str13 =" Hello";
console.log(str13.charAt(1));

// charcodeAt ()

let str14 =" ABC";
console.log(str14.charCodeAt(1));

// split ()

let str15 ="siddu and ram are good friendes";
console.log(str15.split(" "));



// Basic OPerations 12 programs ()

// Print a string ()

let str16 ="Hello Bhavani";
console.log(str16);


// string length ()

let str17 =" open the door";
console.log(str17.length);

// concatention of string ()

let str18 =" jai shree ram";
let str19 =" jai shree krishna";
console.log(str18.concat(" ",str9));

// compare strings ()

let str20 ="apple";
let str21 ="banana";
if (str20 === str21) {
    console.log("The string are equal");
}

else if (str20 < str21) {
    console.log(" the string " + str20 + " comes before " + str21);
}
else {
    console.log(" the string " + str21 + " comes before " + str20);
}   


// Access characters

let str22 =" Bhavani";
console.log(str22[1]);
console.log(str22.charAt(1));


// Loop through a string

let str23 ="Did you know that JavaScript was created in just 10 days?";
for (let i =0;
    i < str23.length;
    i++) {
        console.log(str23[i]);
    } 

    // Reverse a string

    let str24 ="CSK is the best team in IPL";
    let reversedstr = "";
    for (let i = str24.length -1;
        i >=0;
        i--) {
            reversedstr += str24[i];
        }
        console.log(reversedstr);

// check palindrome

let str25 ="sid";
let reversedstr1 ="";
if (str25 === reversedstr1) {
    console.log(str25 + " is a plindrome");
}
else {
    console.log(str25 + " is not a plindrome");
}

// Count vowels

let str26 =" Hii people";
let count = 0;
for (let  char of str26) {
    if ("aeiouAEIOU".includes(char)) {
        count++;
    }
}
console.log("Number of vowels in the string: " + count);

// Convert to Array

let str27 ="Apple, banana, orange";
let fruits = str27.split(",");
console.log(fruits);


// REmove Spaces

let str28 ="H I I";
let nospace = str28.replace(", ", "");
console.log(nospace);


// // Basic Operations on JavaScript Strings

// Finding the length of a string

let str29 ="Rebel Saab";
let lenth = str29.length;
console.log(" The length of the string is " + lenth);

//  string concatenation 

let str30 ="siddu";
let str31 ="nitturi";
let fullName = str30 + " " + str31;
console.log("fullname is " + fullName);


// Escape Characters

let str32 ="Hi bhavani, how are you?";
console.log(str32);


// Breaking Long strings

let str33 ="I Propose to say I LOVE YOU bhavani, I want to spend the rest of my life with you.";
console.log(str33);

// Find Substring of a String

let str34 =" I am doing job in a  Oppty TechHub Private Limited";
console.log(str34.substring(17, 29));

// Convert string to uppercase to lowercase

let str35 ="I am a Fan of Prabhas";
console.log(str35.toUpperCase());
console.log(str35.toLowerCase());

// String Search in Javascript

let str36 ="come back soon";
let searchterm = "back";
if (str36.includes(searchteam)) {
    console.log("The string contains the search term.");
} else {
    console.log("the string does not contain the search term.");
}

// String Replace in javascript

let str37 ="I like you";
let newstr = str37.replace("like ", "love");
console.log(newstr);

// Trimming whitespace From string

let str38 ="   Boss is back   ";
let cleanstr = str38.trim();
console.log(cleanstr);


// Access characters from String

let str39 =" Hello";
console.log("first charachter: ", str39[0]);
console.log("second charachert;" , str39.charAt(1));


// String  Comparison in javascript

let str40 ="orange";
let str41 ="apple";
if (str40 === str41) {
    console.log("the string are equal");
}
else if (str40 < str41) {
    console.log("the string " + str40 + " comes before " + str41);
}
else {
    console.log("the string " + str41 + " comes before " + str40);
}


// Passing javascript string string as Object

let str42 ="hiii";
let strobj = new String(str42);
console.log(strobj);

