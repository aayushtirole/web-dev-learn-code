// humein seekhna factories banaana, matlab ki aap ek baar bluepruint bana do ki har object kaisa dikhega and hum log naye naye objects with different values bana paayege, yahi upar upar se poora kaam hai OOPS mein


// ✅ Constructor function: Blueprint create kar raha hai pencil objects ke liye

function CreatePencil(name, price, color, company) {
  // 🔹 'this' refers to the new object being created
  this.name = name;         // 🔹 Pencil ka naam store karne ke liye
  this.price = price;       // 🔹 Pencil ki price store karne ke liye
  this.color = color;       // 🔹 Pencil ka color store karne ke liye
  this.company = company;   // 🔹 Pencil ka company name store karne ke liye
}

// ✅ Prototype method: Har object ke liye ek hi method share hoga, memory efficient
// agar tumhaara constructor function koi field apne prototype par attach karle to us constructor se banne waale sabhi new objects, ke paas wo field automatically chali jaati hai


CreatePencil.prototype.write = function (text) {

  // 🔹 H1 element create kar rahe hain jo text ko show karega
  let h1 = document.createElement("h1");

  // 🔹 H1 ke andar text set kar rahe hain (jo user provide kare)
  h1.textContent = text;

  // 🔹 H1 ka text color current pencil ke color ke hisaab se set karenge
  h1.style.color = this.color;

  // 🔹 H1 element ko console me bhi dekh sakte hain (debugging ke liye)
  console.log(h1);

  // 🔹 H1 element ko page ke body me append kar rahe hain, user ko dikhega
  document.body.append(h1);
};

// ✅ Creating objects using 'new': ek-ek naya pencil object create ho raha hai

let pencil1 = new CreatePencil("Nataraj", 10, "black", "nataraj"); // 🔹 Black Nataraj pencil

let pencil2 = new CreatePencil("Doms", 10, "red", "doms");         // 🔹 Red Doms pencil
