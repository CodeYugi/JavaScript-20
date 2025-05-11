// Variables

// var 
// as var is a Variables it store the value but here a twist 

var age = 18
console.log(age);

//// var is global ..... what that means 

{
    var name = "yugi"
    console.log(name); // output yugi
}
console.log(name); // output yugi

// see both console.log gives output yugi
// thats why global inside {} and outside you can access the name 

//let 
// a  let is a variable it store the value like same to same as var but

let city = "modinagar"
console.log(city);

// let is not global 

{
    let laptop = "lenovo"
    console.log(laptop); // output lenovo  
}

// console.log(laptop); // error laptop is not defined 


// const 
// as it also a variable it store the value but theres a thing that make 
// him diffrent from var and let 

const Country = "india";
console.log(Country);

// it cannot be use again 

var car = "BMW"
 car = "Audi"
 console.log(car); // output Audi

 // in var we can define again but it is one of the bad practice 

 let phone = "samg"
 phone = "vivo"
 console.log(phone); // output vivo

 // in let same 

 const mouse = "zeb"
 mouse = "hp"
 console.log(mouse); // error assignment to constant variable 


 // there id one more thing that make it different 

 var LastName;
 LastName = "xyz"

 let FirstName;
 FirstName = "abc"

//  const YourName; // error we have to assign the value to const we cannot declare first then give value

// in const there is no datatype like in var and let 
// for exmaple var name = "yugi"  here name is string
// in let .... let age = 19 here age is number 
// but in  case of const ....  const name = "yugi" name is yugi 





