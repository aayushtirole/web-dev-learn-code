class User{
  constructor(name, address, username, email) {

    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.role = "User";
    
  }

  checkRole(){
    return `you are a ${this.role}`;
  }

write(text){
  let h1 = document.createElement("h1");
  h1.textContent = `${this.name} : ${text}`;
  document.body.appendChild(h1);
  }
}

class Admin extends User{
  constructor(name, address, username, email){
    super(name, address, username, email);
    this.role = "admin";
  }

  remove(){

    document.querySelectorAll("h1").forEach(function(elem){
      elem.remove();
    });
  }
}

let u1 =new User("aayush", "indore", "aayush7",  "aayush@gmail.com");
let u2 =new User("piyush", "bhopal", "piyush23",  "piyush@gmail.com");
let a1 =new Admin("admin1", "India", "adminnn",  "admin@gmail.com");
