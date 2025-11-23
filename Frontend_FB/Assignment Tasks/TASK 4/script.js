let form_main = document.getElementById("form_main");

let name_box = document.getElementById("name_box");
let email_box = document.getElementById("email_box");
let pass_box = document.getElementById("pass_box");

let name_error = document.getElementById("name_error");
let email_error = document.getElementById("email_error");
let pass_error = document.getElementById("pass_error");

name_box.addEventListener("input", () => {
  if (name_box.value.trim() === "") {
    name_error.textContent = "Name is required";
    name_box.classList.add("invalid_box");
    name_box.classList.remove("valid_box");
  } else {
    name_error.textContent = "";
    name_box.classList.remove("invalid_box");
    name_box.classList.add("valid_box");
  }
});

email_box.addEventListener("input", () => {
  if (!email_box.value.includes("@")) {
    email_error.textContent = "Email must include '@'";
    email_box.classList.add("invalid_box");
    email_box.classList.remove("valid_box");
  } else {
    email_error.textContent = "";
    email_box.classList.remove("invalid_box");
    email_box.classList.add("valid_box");
  }
});

pass_box.addEventListener("input", () => {
  let p = pass_box.value;

  if (p.length !== 8) {
    pass_error.textContent = "Password must be 8 characters";
    pass_box.classList.add("invalid_box");
    pass_box.classList.remove("valid_box");
  } else {
    pass_error.textContent = "";
    pass_box.classList.remove("invalid_box");
    pass_box.classList.add("valid_box");
  }
});

form_main.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    name_box.classList.contains("valid_box") &&
    email_box.classList.contains("valid_box") &&
    pass_box.classList.contains("valid_box")
  ) {
    alert("Form Submitted Successfully!");
  } else {
    alert("Please fix all errors.");
  }
});
