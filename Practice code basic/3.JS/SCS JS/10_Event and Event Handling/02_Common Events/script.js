//click
let p = document.querySelector("p");

p.addEventListener("click",function(){
    p.style.color = "red";
});

//Input

let inp = document.querySelector("input");

inp.addEventListener("input",function(evt){
    console.log(evt.data);
});