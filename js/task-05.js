"use strict";

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const changeName = (event) => {
  if (event.currentTarget.value !== "") {
    nameOutput.textContent = event.currentTarget.value;
    return nameOutput;
  }
  return (nameOutput.textContent = "Anonymous");
};

nameInput.addEventListener("input", changeName);
