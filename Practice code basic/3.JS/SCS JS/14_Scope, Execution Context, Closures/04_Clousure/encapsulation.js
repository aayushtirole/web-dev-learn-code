// Encapsulation = hiding data and exposing only what’s necessary

function clickLimiter(){
    let click = 0;
    return function(){
        if(click < 5 ){
            click++;
            console.log(`clicked : ${click} times`);
        } else{
            console.error("Limit exceeded, try after some time");
        }
    };
}

let fnc = clickLimiter();
fnc();
fnc();
fnc();
fnc();
fnc();
fnc(); // error called