function hello(){
    console.log("hello");

}
hello();

function PrintName(){
    console.log("Saurabh Pandey");
    console.log("IAS Saurabh Pandey")
}
PrintName();


function print1to5(){
    for(let i =1; i<= 5; i++){
        console.log(i);
    }
}
print1to5();


function isAdult(){
    let age = 18;
    if(age >= 18){
        console.log("adult");
    }else{
        console.log("not adult");
    }
}
isAdult();

function rollDice(){
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}
rollDice();