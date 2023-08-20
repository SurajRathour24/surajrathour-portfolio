// Toggle icon navebar ==================




// scroll section 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')


window.onscroll = () =>{
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
          // active navbar links 
          navLinks.forEach(links => {
            links.classList,remove('active');
            document.querySelector('header nav a[href*= ' + id + ' ]').classList.add('active');
          })
    }  
  });
  // sticky header 
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

}

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


