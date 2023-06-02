"use strict";
const validationInput = document.getElementById("validation-input");
const inputLength = validationInput.getAttribute("data-length");
const validationText = () => {
  if (validationInput.value.length === Number(inputLength)) {
    validationInput.setAttribute("class", "valid");
  } else {
    validationInput.setAttribute("class", "invalid");
  }
};

validationInput.addEventListener("blur", validationText);
