class User {
  constructor(name, address, username, email) {
    // user ke basic details set karna
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.role = "User"; // default role
  }

  checkRole() {
    // user ka role batana
    return `you are a ${this.role}`;
  }

  write(text) {
    // user ke naam ke sath message likhna
    let h1 = document.createElement("h1");
    h1.textContent = `${this.name} : ${text}`;
    document.body.appendChild(h1);
  }
}

class Admin extends User {
  constructor(name, address, username, email) {
    // parent class ka constructor call karna
    super(name, address, username, email);
    this.role = "admin"; // role change karna
  }

  remove() {
    // sabhi h1 elements remove karna
    document.querySelectorAll("h1").forEach(function (elem) {
      elem.remove();
    });
  }
}

// user aur admin objects banana
let u1 = new User("aayush", "indore", "aayush7", "aayush@gmail.com");
let u2 = new User("piyush", "bhopal", "piyush23", "piyush@gmail.com");
let a1 = new Admin("admin1", "India", "adminnn", "admin@gmail.com");
