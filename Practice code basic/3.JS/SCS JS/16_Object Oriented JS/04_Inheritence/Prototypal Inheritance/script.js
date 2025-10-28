// inheritence :- class -> class
// Prototypal inheritence :- sirf js main hota hain 
// object -> object se inherit kata hain 
// ek object hain aap chaaho toh uski saari properties / methods ko inherit kara dete ho doosre object main 
// exmaple :
// let a = {};
// let b = object.crate(a);

// ✅ Base object
const user = {
  role: "User",
  checkRole() {
    console.log(`You are a ${this.role}`);
  },
};

// ✅ New object banaya aur uska prototype user set kiya
const admin = Object.create(user);

// ab admin apni properties add kar sakta hai
admin.name = "Aayush";
admin.role = "Admin";

// ✅ Ab admin ke paas user ka method bhi available hai (through prototype)
admin.checkRole(); // Output: You are a Admin

// 🔍 Internally: admin.__proto__ = user
