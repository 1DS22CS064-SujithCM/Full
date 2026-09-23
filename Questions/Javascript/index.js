// 1. what is hoisting
// moving the scope of variable,functions to the top of the scope in compiled phase
// 3 types - variable,function,let and const

// variable hoisting - only for declartion not initialsize

console.log(x)
var x=5
console.log(x)

// function hoisting - both declaration and initials
greet();
function greet(){
    console.log("hello");
}

// let and const - are hoisted but not initialised

//console.log(y); // gets error
//console.log(z); // gets error

let y=10;
const z=20;

// 8 Data Types
// Primitive
let age=25;
let temp=98.6
let bigNumber=12345678909876542123456789456789876545678765n;

let greeting="Hello"   // double quotes
let name='John'     // single quotes
let message=`Welcome`    // template literals 

let isRain=true;
let hasLincense=false;
let score; // undefined
console.log(score)

let something=null;

let s1=Symbol('unquiueKey');    // unquiueKey in both s1 s2 are just description not the values
let s2=Symbol('unquiueKey');
console.log(s1===s2)      // false

let s3=Symbol.for('unquiueKey');  
let s4=Symbol.for('unquiueKey');
console.log(s3===s4)     // true   uses a global symbol registry same key-> same symbol returned

// non -primitive

// object
let person={
    name:"Aarya",
    gender:"M"
}
console.log(person.gender)


// this
function some()
{
    console.log(this);
}
some();