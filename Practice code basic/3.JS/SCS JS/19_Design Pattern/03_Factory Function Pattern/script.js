//Factory Function Pattern

// Ek function banate hain jo objects create karta hain (factory = object banane ki machine)

// Factory function pattern ek aisa design pattern hain jisme hum ek simple function likhte hain jo naye objects banakar return karta hain, bina class yaa new keyword use kiye 

// Is pattern ka main idea hain -> object creation ko ek function ke through control krna 

// har baar jab tum factory function call karte ho, tumhe ek naya object milta hain jisme apne methods aur (agar chaho to ) private data ho skta hain 

// Yeh pattern specially useful hain jb tumhe ek hi type ke bohot saare objects chahiye jaise users, products, tasks, etc. 

function createProduct(name, price){
   let stock = 10;
   return {
      name,
      price,
      checkStock(){
         console.log(stock);
      },
      buy(qty){
         if(qty <= stock){
            stock -= qty;
            console.log(`${qty} pieces booked - ${stock} pieces left`)
         }else{
            console.error(`We only have ${stock} pieces left`);
         }
      },
      refill(qty){
         stock += qty;
         console.log(`refill the stock - ${stock} pieces now`);
      }
   };
}

let iphone = createProduct("iphone" , 70000 );
let kitKat = createProduct("KitKat" , 10 );
iphone.buy(5);
kitKat.buy(10);

