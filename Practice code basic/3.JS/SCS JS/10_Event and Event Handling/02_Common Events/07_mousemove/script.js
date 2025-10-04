let abcd =document.querySelector("#box");

window.addEventListener("mousemove",function(dets){
    abcd.style.top = dets.clientY+ "px";
    abcd.style.left = dets.clientX + "px";
});