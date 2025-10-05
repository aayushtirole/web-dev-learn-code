let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector(".button");

btn.addEventListener("click",function(){
    console.log("button clicked");
});

c.addEventListener("click",function(){
    console.log("c clicked");
}, true);

b.addEventListener("click",function(){
    console.log("b clicked");
});

a.addEventListener("click",function(){
    console.log("a clicked");
}, true );


//is true ka use hain :-  event ko capture karane jisase phase show hota hain 
