console.log("Hello World")


let pencilPrice = 10;
let eraserPrice = 5;
// let output = "The total price is : " + (pencilPrice + eraserPrice) + "Rupees. ";
let output = `the total price is : ${pencilPrice + eraserPrice} Rupees .`; // Backtick
console.log(output)
// Template literals -- they are used to add embedded expressions in a string.


//  Arithmetic Operators
let a = 10;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a**b);
console.log(a/b);
console.log(a%b);
console.log(a*b);


let age = 19;
console.log(age> 18);


if (true) {
    console.log("It has true value");
}
else{
    console.log("it has false value");
}


alert("something is wrong");

console.error("this is the error...");
// console.warn("ooooohhhhh");

// let firstname = prompt("Enter your name :");
// console.log(firstname);
let firstname = prompt("Enter first Name ");
let lastname = prompt("Enter the last name ");
console.log(firstname,"", lastname, "!");