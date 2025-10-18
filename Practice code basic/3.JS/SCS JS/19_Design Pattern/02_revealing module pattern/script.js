
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
    check : checkbalance,
    set : setbalance,
    draw : withdraw
   }
})();

Bank.check();



