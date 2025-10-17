function getUsers() {
    // 1. Clear previous user listings
    document.querySelector(".users").innerHTML = ""; 

    // 2. Fetch data from the Random User API
    fetch("https://randomuser.me/api/?results=3")
        .then((raw) => raw.json())
        .then((data) => {
            // 3. Loop through each user result
            data.results.forEach(function (user) {
                
                // --- ELEMENT CREATION ---
                const card = document.createElement("div");
                card.className = "bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full"; // Styles for the main card

                const innerFlex = document.createElement("div");
                innerFlex.className = "flex items-center space-x-4"; // Styles for avatar/text alignment

                const avatar = document.createElement("img");
                avatar.className = "w-16 h-16 rounded-full object-cover border-2 border-gray-700";
                avatar.src = user.picture.large;
                avatar.alt = `${user.name.first} ${user.name.last} avatar`;

                const textContainer = document.createElement("div");

                const name = document.createElement("h2");
                name.className = "text-xl font-semibold text-gray-100";
                // Populate the name content
                name.textContent = `${user.name.first} ${user.name.last}`;

                const email = document.createElement("p");
                email.className = "text-sm text-gray-400";
                email.textContent = user.email;

                // --- ELEMENT APPENDING (CRITICAL STEP) ---
                
                // Nest name and email inside the text container
                textContainer.appendChild(name);
                textContainer.appendChild(email); 

                // Nest avatar and text container inside the flex container
                innerFlex.appendChild(avatar);
                innerFlex.appendChild(textContainer);

                // Nest the flex container inside the main card
                card.appendChild(innerFlex);

                // Append the completed card to the .users container in the HTML
                document.querySelector(".users").appendChild(card);
            });
        });
}

// Initial call to load users when the script runs
getUsers();

// Add an event listener to the refresh button
document.querySelector("#refreshBtn").addEventListener("click", function () {
    getUsers();
});