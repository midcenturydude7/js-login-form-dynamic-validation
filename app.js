// DYNAMIC LOGIN FORM VALIDATION WITH HTML, CSS & JS
const form = document.querySelector("#login-form");
const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const emailReg = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

let username = form.elements.namedItem("username");
let password = form.elements.namedItem("password");
let email = form.elements.namedItem("email");

username.addEventListener("input", validate);
password.addEventListener("input", validate);
email.addEventListener("input", validate);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Submitted!");
  return true;
});

function validate(e) {
  let target = e.target;

  if (target.name === "password") {
    if (passReg.test(target.value)) {
      target.classList.add("valid");
      target.classList.remove("invalid");
    } else {
      target.classList.add("invalid");
      target.classList.remove("valid");
    }
  }

  if (target.name === "email") {
    if (emailReg.test(target.value)) {
      target.classList.add("valid");
      target.classList.remove("invalid");
    } else {
      target.classList.add("invalid");
      target.classList.remove("valid");
    }
  }

  if (target.name === "username") {
    if (target.value.length >= 2) {
      target.classList.add("valid");
      target.classList.remove("invalid");
    } else {
      target.classList.add("invalid");
      target.classList.remove("valid");
    }
  }
}
