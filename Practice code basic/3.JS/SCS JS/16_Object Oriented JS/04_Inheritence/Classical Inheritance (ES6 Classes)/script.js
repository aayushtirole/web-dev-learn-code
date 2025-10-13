// inheritence :- class -> class
// classical inheritence  :- java, cpp
// classes banana and extend kardena \


// ✅ Base Class
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.role = "User";
  }

  checkRole() {
    console.log(`You are a ${this.role}`);
  }
}

// ✅ Derived Class (Child class)
class Admin extends User {
  constructor(name, email, permissions) {
    super(name, email); // parent class ka constructor call hota hai
    this.permissions = permissions;
    this.role = "Admin";
  }

  // extra method sirf Admin ke liye
  showPermissions() {
    console.log(`${this.name} has ${this.permissions} permissions`);
  }
}

// ✅ Object create karte hain
let aayush = new Admin("Aayush", "aayush@gmail.com", "full");

// ✅ Methods use karte hain
aayush.checkRole();        // You are a Admin
aayush.showPermissions();  // Aayush has full permissions
