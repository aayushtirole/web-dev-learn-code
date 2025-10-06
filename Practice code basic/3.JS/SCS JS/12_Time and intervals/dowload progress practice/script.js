let count = 0;
let seconds = 5;

let bar =  document.querySelector(".progress-fill");
let percentage =  document.querySelector(".percentage");

let intv = setInterval(
    function(){
    
    if(count <= 99){
    count++;
    bar.style.width =`${count}%`;
    percentage.textContent = `${count}%`;
    
    }else { 
        document.querySelector(".label").textContent = "Downloaded!";
        clearInterval(intv);
    }

},
   (seconds * 1000) / 100
);