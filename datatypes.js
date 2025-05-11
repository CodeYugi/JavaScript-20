// Data Types
// JavaScript has 8 Datatypes
// 1. String
// 2. Number 
// 3. BigInt
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol 
// 8. Object

// String 
let String_ = "yugi is learning java script"
// String is like name ,color 

// Number
let Number_ = 19
// i think no need to tell

// Bollean
let Bollean_ = true 
let Bollean2_ = false 
//bollean is basicaly true and false only 

//BigInt
// BigInt values represent integer values which are too high or too low to be represented by the number primitive.
const big = 9007199254740991n + 1n;  // This is safe with BigInt
// console.log(big);  // 9007199254740992n

// undefined and null

let name;
let age = null;

// Here, 'name' is undefined and 'age' is null.
// 'undefined' means the variable is declared but no value has been assigned.
// 'null' means the variable is intentionally assigned a value of "nothing".
// Both exist, but represent different kinds of "emptiness".

//Symbol 
// unique value or special value

// objects

const heros = {
    first: "salman", 
    second: "Srk",
    third: "Amir" ,
    age: 90 ,
    cond: true ,
    money: null ,
};

heros.first = "king"; // edit 
heros.Raju = "chaiwala"; // add 

console.log(heros);

let value = heros.money;

console.log(value);

let result = heros["first"] + heros["second"] + heros["third"] + "  have  " + heros["age"] + "  crore" ;
console.log(result);
