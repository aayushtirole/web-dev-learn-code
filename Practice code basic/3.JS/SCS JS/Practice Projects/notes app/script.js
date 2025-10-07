
// ALL VARIABLES & SELECTIONS

let addNote = document.querySelector("#add-note");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".closeForm");
const stack = document.querySelector(".stack");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");
const form = document.querySelector("form");

const imageUrlInput = form.querySelector("input[placeholder='https://example.com/photo.jpg']");
const fullNameInput = form.querySelector("input[placeholder='Enter full name']");
const homeTownInput = form.querySelector("input[placeholder='Enter home town']");
const purposeInput = form.querySelector("input[placeholder='e.g., Quick appointment note']");
const categoryRadios = form.querySelectorAll("input[name='category']");
const submitButton = form.querySelector(".submit-btn");


// SAVE TO LOCAL STORAGE

function saveToLocalStorage(obj) {
    let oldTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
}


// SHOW CARDS FUNCTION

function showCards() {
    stack.innerHTML = "";

    let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    if (allTasks.length === 0) {
        stack.innerHTML = "";
        return;
    }

    allTasks.forEach(function (task) {
        // Create card container
        const card = document.createElement("div");
        card.classList.add("card");

        // Avatar image
        const avatar = document.createElement("img");
        avatar.src = task.imageUrl || "https://via.placeholder.com/100";
        avatar.alt = "profile";
        card.appendChild(avatar);

        // Name
        const name = document.createElement("h2");
        name.textContent = task.fullName;
        card.appendChild(name);

        // Info: Home town
        const hometownInfo = document.createElement("div");
        hometownInfo.classList.add("info");
        hometownInfo.innerHTML = `<span>Home town:</span> <span>${task.homeTown}</span>`;
        card.appendChild(hometownInfo);

        // Info: Purpose
        const bookingsInfo = document.createElement("div");
        bookingsInfo.classList.add("info");
        bookingsInfo.innerHTML = `<span>Purpose:</span> <span>${task.purpose}</span>`;
        card.appendChild(bookingsInfo);

        // Buttons container
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");

        // Call button
        const callBtn = document.createElement("button");
        callBtn.classList.add("call");
        callBtn.innerHTML = '<i class="ri-phone-line"></i> Call';

        // Message button
        const msgBtn = document.createElement("button");
        msgBtn.classList.add("msg");
        msgBtn.textContent = "Message";

        // Append buttons
        buttonsDiv.appendChild(callBtn);
        buttonsDiv.appendChild(msgBtn);
        card.appendChild(buttonsDiv);

        // Append card to stack
        stack.appendChild(card);
    });

    updateStack();
}


// STACK ANIMATION UPDATE

function updateStack() {
    const cards = document.querySelectorAll(".stack .card");
    /*
    cards.forEach(function (card, index) {
        card.style.zIndex = cards.length - index;
        card.style.transform = `translateY(${index * 10}px) scale(${1 - index * 0.02})`;
        card.style.opacity = `${1 - index * 0.2}`;
    });
    */

    for (let index = 0; index < 3 ; index++) {
    let card = cards[index];
    card.style.zIndex = cards.length - index;
    card.style.transform = `translateY(${index * 10}px) scale(${1 - index * 0.02})`;
    card.style.opacity = `${1 - index * 0.2}`;
}

}


// ADD NOTE BUTTON

addNote.addEventListener("click", function () {
    formContainer.style.display = "block";
});


// CLOSE FORM BUTTON

closeForm.addEventListener("click", function () {
    formContainer.style.display = "none";
});


// FORM SUBMIT EVENT

form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    const imageUrl = imageUrlInput.value.trim();
    const fullName = fullNameInput.value.trim();
    const homeTown = homeTownInput.value.trim();
    const purpose = purposeInput.value.trim();
    let selected = "";

    categoryRadios.forEach(function (cat) {
        if (cat.checked) {
            selected = cat.value;
        }
    });

    // Validation
    if (!imageUrl) return alert("Please enter an Image URL.");
    if (!fullName) return alert("Please enter your Full Name.");
    if (!homeTown) return alert("Please enter your Home Town.");
    if (!purpose) return alert("Please enter the Purpose.");
    if (!selected) return alert("Please select a category.");

    // Save Data and Update UI
    saveToLocalStorage({ imageUrl, fullName, purpose, homeTown, selected });
    form.reset();
    formContainer.style.display = "none";
    showCards();
});


// STACK NAVIGATION BUTTONS

upBtn.addEventListener("click", function () {
    const lastChild = stack.lastElementChild;
    if (lastChild) {
        stack.insertBefore(lastChild, stack.firstElementChild);
        updateStack();
    }
});

downBtn.addEventListener("click", function () {
    const firstChild = stack.firstElementChild;
    if (firstChild) {
        stack.appendChild(firstChild);
        updateStack();
    }
});

// INITIAL LOAD
showCards();
