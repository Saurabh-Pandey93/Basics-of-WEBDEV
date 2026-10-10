function printInfo(name, age){
    console.log(`${name}'s age is ${age}.`)
}
printInfo("saurabh pandey", 21);


function CalcAverage(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}
CalcAverage(4,5,6,7);


function getSum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
        return sum;
}

let str = ["hi", "hello", "bye", "!"];
function concate(str){
    let result;
    for(let i = 0; i<str.length; i++){
        result += str[i];
    }
    return result;
}

let name = "saurabh";
let sum = function(a,b){
    return a+b;
}
let hello = function(){
    console.log("hello");
}

let odd = function(n){
    console.log(!(n%2 == 0));
}
let even = function(n){
    console.log(n%2 == 0);

}

function OddEven(request){
    if(request == "Odd"){
        let odd = function(n){
            console.log(!(n%2 == 0));
        }
        return odd;
    }else if(request == "Even"){
        let even = function(n){
            console.log (n%2 == 0);
        }
        return even;
    }else {
        console.log("wrong request");
    }
}
let request = "odd";

