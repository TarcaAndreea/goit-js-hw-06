"use strict";
const formLogIn = document.querySelector(".login-form");
function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    console.log("Completează toate câmpurile!");
    return;
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);

  event.currentTarget.reset();
}

formLogIn.addEventListener("submit", handleSubmit);
