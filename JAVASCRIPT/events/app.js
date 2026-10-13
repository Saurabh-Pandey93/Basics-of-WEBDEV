let btns = document.querySelectorAll("button");


// btn.onclick = function() {
//     console.log("button was clicked");
// };

// function sayHello() {
//     alert("hello!!!");

// }


for(btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = function() {
        console.log("you clicked a button");
    }
    console.dir(btn);
}

function sayHello() {
    alert("Hello!");
}

