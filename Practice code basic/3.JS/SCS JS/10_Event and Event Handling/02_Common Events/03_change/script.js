//change 
// change event tab chalta hain jab aapna koe input select ya text area main koe change ho jaye

let sel = document.querySelector("select");
let dev = document.querySelector("#device");
sel.addEventListener("change",function(dets){
    console.log(dets.target.value);
    dev.textContent = `${dets.target.value} Device Selected`;
});

