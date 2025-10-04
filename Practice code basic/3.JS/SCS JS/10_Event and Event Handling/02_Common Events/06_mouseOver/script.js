let abcd = document.querySelector("#box");

abcd.addEventListener("mouseover",function(){
    abcd.style.backgroundColor = "yellow";
});

abcd.addEventListener("mouseout",function(){
    abcd.style.backgroundColor = "red";
});