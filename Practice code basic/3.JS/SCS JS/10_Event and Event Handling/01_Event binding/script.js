let p = document.querySelector("p");

// adding ka event listener 
p.addEventListener("click",function(){
   p.style.color = "red";
});

// ----------------------------------------------------------------------------------------------------------------------------------------------------//
//remove event listener

let h1 = document.querySelector("h1");
function dblclick(){
    h1.style.color ="green";
}

h1.addEventListener("dblclick",dblclick); 
h1.removeEventListener("dblclick",dblclick);