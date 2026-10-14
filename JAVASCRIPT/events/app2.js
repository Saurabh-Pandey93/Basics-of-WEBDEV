// keyboard events
let btn = document.querySelector("button");

btn.addEventListener("click", function(event){
    console.log(event);
    console.log("button clicked");
})

let inp = document.querySelector("input");
inp.addEventListener("keydown", function(){
    console.log("key = ", event.key);
    console.log("code = ", event.code);
    

    console.log("key was pressed");
});