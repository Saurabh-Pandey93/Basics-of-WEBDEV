// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }

// for (let i = 1; i <= 15; i += 2) {
//     console.log(i);
// }
 

// for (let j = 2; j <= 10; j += 2){
//     console.log(j);
// }


// let n = prompt("write your number");
// n = parseInt(n)

// for(let k = n; k <= n*10; k = k + n){
//     console.log(k);
// }

// // for (let k = 5; k <= 50; k += 5){
// //     console.log(k);
// // }




// for(let i = 1; i <= 3; i++){
//     console.log(`outer loop ${i}`)
//     for(let j = 1; j <= 3; j++){
//         console.log(j);
//     }
// }


// let i = 0;
// while(i <= 20){
//     console.log(i);
//     i++;
// }



// const favMovie = "avatar";

// let guess = prompt("guess my favorite movie");

// while( (guess != favMovie) && (guess != "quit")) {
//     guess = prompt("wrong guess.please try again");

// }
// if(guess == favMovie){
//     console.log("congratulations!!");

// }


// let i = 1;
// while(i <= 5){
//     if(i == 3) {
//         break;
//     }
//     console.log(i);
//     i++;
// }

// console.log("We used break at i =3");

let fruits = ["mango", "apple", "banana", "litchi", "orange"];
fruits.push("pineapple");

for (let i=0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}


let heroes = [
    ["ironman", "captain_america", "thor"],
    ["superman", "batman", "flash"]    
]

for(let i = 0; i<heroes.length; i++) {
    console.log(i, heroes[i], heroes[i].length);
    for(let j = 0; j<heroes[i].length; j++){
        console.log(`j = ${j}, ${heroes[i][j]}`)
    }
}




let falss = ["mango", "apple", "banana", "litchi", "orange"];

for(fruit of falss){
    console.log(fruit)
}