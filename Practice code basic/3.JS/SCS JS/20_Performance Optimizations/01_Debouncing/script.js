// debouncing ->  koe action kar rahe ho and hum nhi chahte har action pe kuch ho, jab bhi mere actions ke beech main koe specific gap aajaye to fir reaction perform ho 

function debounce(fnc, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(function(){
            fnc(...args);
        }, delay);
    };    
}


let input = document.querySelector("input");

input.addEventListener("input", debounce (function(){
   console.log("hey");
}, 1000)
);