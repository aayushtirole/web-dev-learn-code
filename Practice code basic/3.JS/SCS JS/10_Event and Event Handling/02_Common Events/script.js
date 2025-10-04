//click
let p = document.querySelector("p");

p.addEventListener("click",function(){
    p.style.color = "red";
});

//Input

let inp = document.querySelector("input");

inp.addEventListener("input",function(dets){
    if (dets.data !== null && dets.data !== " "){
        console.log(dets.data);
    }
});

//change 
// change event tab chalta hain jab aapna koe input select ya text area main koe change ho jaye

let sel = document.querySelector("select");
let dev = document.querySelector("#device");
sel.addEventListener("change",function(dets){
    console.log(dets.target.value);
    dev.textContent = `${dets.target.value} Device Selected`;
});
