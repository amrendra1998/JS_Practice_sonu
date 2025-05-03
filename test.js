// Variable in JS 
const name ="Amrendra Kumar"
let number = "10"
var password = "1234"

// console.log(name);
// console.log(number);
// console.log(password);

// let x = 10;
// let y = 20;
// let z = x + y;

// // console.log(z);

// const number1 = 20;
// const number2 = 30;
// let sum = number1 + number2;
// console.log("sum is: " + sum); --> variable is used to store the value of sum

// Javascript Identifier are case sensitive 

let Carname = "BMW";
// console.log(Carname); 

let person ="Sonu" , vechile = "Jeep" , age = 32;
console.log(person);
console.log(vechile);
console.log(age);


// const Bankname  = "SBI";
// console.log(Bankname); 

let Number;
console.log(Number);
 
// Javascript Opeator
const x = "sonu"
const y = "kumar"
const z = x + y;
// console.log(z); 

// let a = 2 + 3 + "5"
// console.log(a); 

const PI = 3.14;
 console.log(PI);

// //  const when to use in JS 
// 1. A new Array
// 2. A new Object
// 3. A new Function
// 4. A new RegExp

const cars = ["apple", "banana", "orange"];
// console.log(cars);
cars[0] = "mango";
cars.push("grape");
 console.log(cars);


// JS Operator 
// Assignment Operators
// Arithmetic Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators

// const EmployeeData = 15462;
// console.log(typeof EmployeeData);  

// const Data = 5;
// Data++;
// const p = Data
// console.log(p);


function loginUsername(username){
    if(username === undefined){
        console.log("Please enter your username");
        return;
    }
    return `Hello ${username}, welcome to the site!`;
}

console.log(loginUsername("sonu"));

