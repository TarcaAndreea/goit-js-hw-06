"use strict";
let counterValue = 0;
const counterSection = document.getElementById("counter");
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const valueElement = document.querySelector("#value");
const decrementClick = () => {
  counterValue -= 1;
  valueElement.textContent = counterValue;
};
const incrementClick = () => {
  counterValue += 1;
  valueElement.textContent = counterValue;
};

decrementButton.addEventListener("click", decrementClick);
incrementButton.addEventListener("click", incrementClick);
