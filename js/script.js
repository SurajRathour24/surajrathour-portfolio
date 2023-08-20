/* type test script animation */
// banner text aniamtion

"use strict";

const type = document.querySelector(".type-text");

let listTexts = ["Suraj Rathaur", "Designer", "Web developer", "Freelancer"];

let index = -1;
let current = 0;

function typeTextFunc() {
  if (current === listTexts.length) {
    current = 0;
  }
  let typeText = setInterval(() => {
    if (index == listTexts[current].length - 1) {
      clearInterval(typeText);
      clearTextFunc();
    } else {
      index++;
      type.textContent += listTexts[current][index];
    }
  }, 150);
}

function clearTextFunc() {
  let clearText = setInterval(() => {
    if (type.textContent.length == 0) {
      clearInterval(clearText);
      index = -1;
      current++;
      typeTextFunc();
    } else {
      type.textContent = type.textContent.slice(0, -1);
    }
  }, 150);
}

typeTextFunc();

// banner text aniamtion end
