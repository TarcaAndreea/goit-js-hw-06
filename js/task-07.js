"use strict";
const text = document.getElementById("text");
const inputControl = document.getElementById("font-size-control");

const inputText = () => {
  const fontSize = inputControl.value;

  if (fontSize >= 16 && fontSize <= 96) {
    text.style.fontSize = fontSize + "px";
  }
};

inputControl.addEventListener("input", inputText);
