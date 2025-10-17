// promises 

// aap ek promise banaate ho jo ki od states main se ek state me jaa skta hain and wo yaa toh resolve hoga yaa to reject hoga ab wo kya hoga ye toh waqt baatayega par humein dono ke liye code likhan padta hain 

let pr = new Promise(function(resolve, reject){
    setTimeout(() => {
       let rn = Math.floor(Math.random()*10);
       if (rn > 5 ) resolve(rn);
       else reject(rn);
    }, 3000);
});

pr.then(function(val){
    console.log(val);
}).catch(function(val){
    console.log(val);
});