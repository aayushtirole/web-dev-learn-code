// this keyword ek special keyword hain,kyoki jaise hi baaki saare keyword ki value ya unka nature same rahta hain this ki value ya nature badal jaata hain iss baat se ki aap ussey kaha use kr rahe ho 

// global scope :-  this value is window
// window hain pradhan mantri - supreme like thing 

console.log(this);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//function scope : this ki value fir se window hi hogi 
function abc(){
    console.log(this); 
}

abc();

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Method :- ek yesa fnc jo object ke andar ho usse ab method khte hain 

// object ka Method ka this hamesha us object ko point karta hai jiske andar wo likha gaya hai (jab tak hum usse normally call karein).

// this ki value vo obj ho jayengi yaa ho jaata hain 

// if arrow function use karenge toh this apni value loose kr dega or vo window ban jaayega yaa dega 

// yadi apn ne fir se method (function) ke andar ek or function bana diya toh fir se this value loose kr dega or window dega 

let obj = {
    name : "Aayush",
    age : 26,
    sayName : function () {
        console.log(this.name); // object main name ko point kar rha hain ab to name milega "aayush"
    },
};

obj.sayName();


// ✅ Extra Note:
// Agar hum method ko kisi aur variable mein store karke call karein,
// to 'this' bhi loose ho jaata hai, kyunki ab wo normal function ke jaise call ho raha hai.
// Example:

let ref = obj.sayName;
ref(); // ❌ yahaan 'this' = window (not obj)

// Isliye object ke context mein hi call karna chahiye (obj.sayName())
// ya 'bind()' use karna chahiye to fix 'this':
// ref.bind(obj)();


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//  Event Handler :-
// Jab hum kisi element par event listener lagate hain,
// to event listener ke andar 'this' keyword us element ko point karta hai
// jiske upar event lagaya gaya hai.

document.querySelector("h1").addEventListener("click", function () {
  // Yahan 'this' → <h1> element
  this.style.color = "red"; // h1 ka color red ho jaayega
  console.log(this); // console mein <h1> element print hoga
});

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 🔹 Class :- 
// this class main blank object banata hain 
// Class ek blueprint (template) hoti hai object banane ke liye.
// Matlab: ek design hota hai jisse hum multiple objects bana sakte hain.

class abcd {
    // 🔸 Constructor function
    // Jab bhi class se object banate ho (using 'new'),
    // ye constructor function automatically run hota hai.
    constructor() {
        console.log("heyhe");  // ye line tab chalegi jab object banega
        this.a = 12;           // 'this' yahan newly created object ko point karta hai
    }
}

// 🔸 'new' keyword se object banaya
let val = new abcd(); 
// Output: "heyhe"

// Ab 'val' ek object hai jiske andar property 'a' hai
console.log(val.a); // Output: 12 ✅


// ⚠️ Agar tum val() likhoge —
// val(); ❌  --> Error: val is not a function
// Kyunki val ek object hai, function nahi.
// Uske andar koi callable function nahi hai.
