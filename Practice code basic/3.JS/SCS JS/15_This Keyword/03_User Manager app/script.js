// ✅ Select all important form elements
let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

// ✅ User Manager Object — saare functions aur data ek hi place pe
const userManager = {
  users: [], // users store karne ke liye array

  // 🔹 App start hone par event listener activate karo
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },

  // 🔹 Form submit hone par default refresh rokke user add karo
  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },

  // 🔹 New user add karna (form se values lekar)
  addUser: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });

    form.reset(); // form clear karo
    this.renderUi(); // UI update karo
  },

  // 🔹 UI render karne ka function (users ko screen par dikhana)
  renderUi: function () {
    // Pehle purani list clear karo
    document.querySelector(".users").innerHTML = "";

    // Har user ke liye ek card banao
    this.users.forEach(function (user) {
      const card = document.createElement("div");
      card.className =
        "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

      //  Photo section
      const img = document.createElement("img");
      img.className =
        "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
      img.src = user.photo;
      img.alt = "User Photo";
      card.appendChild(img);

      //  Name section
      const name = document.createElement("h2");
      name.className = "text-2xl font-bold mb-1 text-blue-700";
      name.textContent = user.username;
      card.appendChild(name);

      //  Role section
      const role = document.createElement("p");
      role.className = "text-purple-500 mb-2 font-medium";
      role.textContent = user.role;
      card.appendChild(role);

      //  Bio section
      const desc = document.createElement("p");
      desc.className = "text-gray-700 text-center";
      desc.textContent = user.bio;
      card.appendChild(desc);

      // Card ko UI mein add karo
      document.querySelector(".users").appendChild(card);
    });
  },

  // 🔹 (Future use) User remove karne ka function
  removeUser: function () {},
};

// 🔹 Initialize app
userManager.init();
