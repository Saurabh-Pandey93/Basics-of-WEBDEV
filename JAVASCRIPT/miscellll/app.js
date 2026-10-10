// Arrow functions
const sum = (a,b) => {
    console.log(a+b);
}

const cube = (a) => {
    console.log(a*a*a);
}

const pow = (a,b) => {
    return a**b;
}

const hello = () => {
    console.log("hello World");
}

const mul = (a,b) => (a*b);                                                         // implicit return


// Set Timeout function--

console.log("Hi there!");

setTimeout(() => {
    console.log("Abhayjeet");
}, 2000);
console.log("Welcome to");



// SET Interval

// console.log("Kya reeeeee");
// let id = setInterval(() => {
// //     console.log("Bhikhmangeyaaaaa");
// // }, 1000000000000000);

// console.log(id);




const student = {
    name : "SAURABH",
    marks : 93,
    prop : this,   //global scope
    getName : function(){
        console.log(this);
        return this.name;
    },
    getMarks : () => {
        console.log(this)
        return this.marks;
    },
    getInfo1 : function () {
        setTimeout(() => {
            console.log(this);
        }, 2000);
    },
    getInfo2 : function (){
        setTimeout(function (){
        console.log(this);
    },2000);
   },
};
