import { createTimeline } from "../general.js";
import { startGame } from "./game.js";

// TODO: VARIABLE FOR EXIT REPEAT ANIMATION

// TODO: VARIABLE FOR DOM
const section = document.querySelector(".closing"); //!! CHANGE SECTION NAME
const sectionGame = document.querySelector(".sgame"); //!! CHANGE SECTION NAME
const elements = document.querySelectorAll('[class^="s7-"]');

let tl;
export function closing() {
  return new Promise((resolve) => {
    elements.forEach((elemen) => { elemen.style.opacity = 0 })
    sectionGame.style.opacity = 0
    gsapEntry();
    gsapExit(resolve);
  })
}

function gsapEntry() {
  const text1 = `"It always seems impossible until it's done."`;
  const text2 = "-Nelson Mandela";
  const elemText1 = document.querySelector(".s7-2");
  const elemText2 = document.querySelector(".s7-3");
  elemText1.innerHTML = text1
    .split("")
    .map((char) => `<span class="char-s7-2 dark-primary-text">${char}</span>`)
    .join("");
  gsap.set(".char-s7-2", { opacity: 0 });

  elemText2.innerHTML = text2
    .split("")
    .map((char) => `<span class="char-s7-3 dark-primary-text">${char}</span>`)
    .join("");
  gsap.set(".char-s7-3", { opacity: 0 });

  tl = createTimeline({ scroll: true, trigger: ".div-s7_s", end: "+=2000" })
  tl.set(".s7-1, .s7-2, .s7-3", { opacity: 1 })
    .to(".char-s7-2", { opacity: 1, duration: 0.5, stagger: 0.03 })
    .to(".char-s7-3", { opacity: 1, duration: 0.5, stagger: 0.03 });
}

function gsapExit(resolve) {
  tl = createTimeline({ scroll: true, trigger: ".div-s7_f", end: "+=1000" })
  tl.to(".s7-1", { opacity: 0, duration: 0.2, onComplete: () => { document.querySelector(".s7-1").style.position = absolute } }).to(".closing", { backgroundColor: "#D3D9E0", duration: 1 }, "<").set(".s7-4", { opacity: 1, duration: 0 }, "<")
    .set(".s7-ornament:nth-child(-n+4)", { y: 100, x: -100, scale: 0, duration: 0 }, "<")
    .set(".s7-ornament:nth-child(n+5):nth-child(-n+7)", { y: -100, x: 100, scale: 0, duration: 0 }, "<")
    .to(".s7-5", { opacity: 1, duration: 0.5 })

  tl.to(".s7-ornament:nth-child(n)", { y: 0, x: 0, scale: 1, duration: 1, rotate: 360 })
    .fromTo(".s7-6", {
      opacity: 0,  rotate: -20, y: -100
    }, { opacity: 1, scale: 1, rotate: 5, ease: "bounce", y:0, duration: 1 })
    .to("sgame", { opacity: 1, onComplete: () => { startGame() } })
}

//TODO: OTHER FUNCTION BELOW
