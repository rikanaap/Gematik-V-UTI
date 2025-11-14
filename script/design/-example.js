import { createTimeline } from "../general.js";

// TODO: VARIABLE FOR EXIT REPEAT ANIMATION

// TODO: VARIABLE FOR DOM
const section = document.querySelector(".section-"); //!! CHANGE SECTION NAME

export function sceneOne() {
  return new Promise((resolve) => {
    if (section.style.display == "") {resolve(); return;}
   
    gsapEntry();
    gsapExit(resolve);
  })
}

function gsapEntry() {

}

function gsapExit(resolve) {

}

//TODO: OTHER FUNCTION BELOW