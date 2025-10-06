let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  // clear previous messages
  document.querySelector("#emailError").textContent = "";
  document.querySelector("#passwordError").textContent = "";
  document.querySelector("#emailError").style.display = "none";
  document.querySelector("#passwordError").style.display = "none";

  // regex patterns
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

  // test values
  let emailans = emailRegex.test(email.value);
  let passwordans = passwordRegex.test(password.value);

  let isValid = true;

  // email check
  if (!emailans) {
    document.querySelector("#emailError").textContent = "Email is incorrect";
    document.querySelector("#emailError").style.display = "initial";
    isValid = false;
  }

  // password check
  if (!passwordans) {
    document.querySelector("#passwordError").textContent =
      "Password must have uppercase, lowercase, number & symbol (min 8 chars)";
    document.querySelector("#passwordError").style.display = "initial";
    isValid = false;
  }

  // success message
  if (isValid) {
    document.querySelector("#resultMessage").textContent = "Everything is correct!";
    document.querySelector("#resultMessage").style.color = "green";
  } else {
    document.querySelector("#resultMessage").textContent = "Please fix the errors.";
    document.querySelector("#resultMessage").style.color = "red";
  }
});
