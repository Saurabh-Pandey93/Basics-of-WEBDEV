let smallImages = document.getElementsByClassName("creator-img");

for (let i = 0; i < smallImages.length; i++){
    console.dir(smallImages[i]);
}



console.dir(document.querySelector("h1"));

console.dir(document.querySelector("#description"));

console.dir(document.querySelector(".creator-img"));


console.dir(document.querySelectorAll("div a"));


let links = document.querySelectorAll('.box a');

for(let i = 0; i<links.length; i++){
    links[i].computedStyleMap.color = "yellow";
}