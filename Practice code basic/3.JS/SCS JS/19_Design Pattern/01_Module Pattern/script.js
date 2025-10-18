// Module Pattern

// Module Pattern ek design pattern hain jisme hum apne code ek self executing function (IIFE) ke andar likhte hain, taki variables aur functions private rahen 

//iske anadr se hum sirf wahi cheezein return karte ahin jo bahar use karni hain 

// Is pattern ka main fayda hain data hiding (encapsulation) aur clean structure, taaki code secure, resuable aur anageable ban sake.

// module pattern main jo bhi banayenge vo iife ke andar banayenge vo private ho jaata hain or hume iife ke andar hi return krna padhta ek object or fir uss object ko access kr skte hain 

let Bank = (function(){
   let bankbalance = 12000;

   function checkbalance(){
    console.log(bankbalance);
   }

   function setbalance(val){
    bankbalance = val;
   }

   function withdraw(val){
      if(val <= bankbalance){
        bankbalance -= val;
        console.log(bankbalance);
      }
   }

   return{
    checkbalance,
    setbalance,
    withdraw
   }
})();

Bank.withdraw(1000);



