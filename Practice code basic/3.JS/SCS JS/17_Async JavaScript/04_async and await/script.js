let pr = new Promise(function(resolve, reject){
        setTimeout(() => {
       let rn = Math.floor(Math.random()*10);
       if (rn > 5 ) resolve("resolved with " + rn);
       else reject("reject with " + rn);
    }, 3000); 
});

async function abcd() {
    try{
        let val = await pr;
        console.log(val);
    }
    catch(err){
        console.log(err);
    }
}

abcd();