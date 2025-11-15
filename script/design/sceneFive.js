import { createTimeline } from "../general.js";

// TODO: VARIABLE FOR EXIT REPEAT ANIMATION

// TODO: VARIABLE FOR DOM
const section = document.querySelector(".scene-five-wrap"); //!! CHANGE SECTION NAME
const nextSection = document.querySelector(".section-six")
const elements = document.querySelectorAll('[class^="s5-"]');

let tl;

export function sceneFive() {
  return new Promise((resolve) => {

    elements.forEach((elemen) => { elemen.style.opacity = 0 })

    gsapEntry();
    gsapExit(resolve);
  })
}

function gsapEntry() {
  tl = createTimeline({ scroll: true, trigger: ".div-s5_s" })
  tl.fromTo(
    ".s5-cloud-1",
    { x: "-200vw", opacity: 1 },
    { x: -50, opacity: 1, duration: 6, ease: "power2.out" }
  )
    .fromTo(
      ".s5-bushes-1",
      { y: "100vh", opacity: 1 },
      { y: 0, opacity: 1, duration: 5, ease: "power2.out" },
      "<"
    )

  s5f1(".div-s5_1")
  s5f2(".div-s5_2")
  s5f3(".div-s5_3")
}

function gsapExit(resolve) {
  tl = createTimeline({ scroll: true, trigger: ".div-s5_f" })
  tl.to(
    [".s5-char-1", ".s5-bubbleText-1", ".s5-bubbleText-2"],
    {
      opacity: 0, duration: 1, stagger: 0.5, onComplete: () => { resolve() }
    },)
    .to(nextSection, { opacity: 1}).set(section, { display: "none", backgroundColor: "#20262D", duration: 0 }, "<")
}

//TODO: OTHER FUNCTION BELOW
function s5f1(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.fromTo(
    ".s5-ball-full",
    { left: "-100%", opacity: 1 },
    { left: "-10%", opacity: 1, ease: "power2.out" }
  )
    .to('.s5-ball-full', {
      left: "5%", duration: 0.3
    }).to(".s5-ball-full", { rotate: 360 })
    .to('.s5-ball-full', {
      left: "18%", duration: 0.3
    }).to('.s5-ball-full', { rotate: 780 }, "<").to(".s5-cloud-1", { x: 60 }, "<")
    .to('.s5-ball-full', {
      left: "25%", duration: 0.3
    }).to('.s5-ball-full', { rotate: 1140 }, "<").to(".s5-cloud-1", { x: 40 }, "<")
    .to('.s5-ball-full', {
      left: "30%", duration: 0.3
    }).to('.s5-ball-full', { rotate: 1400 }, "<").to(".s5-cloud-1", { x: 20 }, "<")
    .to('.s5-ball-full', {
      left: "36%", duration: 0.3
    }).to('.s5-ball-full', { rotate: 1760 }, "<").to(".s5-cloud-1", { x: 45 }, "<")
    .to('.s5-ball-full', {
      left: "42%", duration: 0.3
    }).to('.s5-ball-full', { rotate: 2120 }, "<").to(".s5-cloud-1", { x: 60 }, "<")
}

function s5f2(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.fromTo(".s5-char-1", {
    x: "100%", opacity: 1
  }, { x: 0, left: "25%" }).to(
    ".scene-five-wrap",
    {
      backgroundColor: "#20262D",
      duration: 2,
      ease: "power2.inOut",
      immediateRender: false,
    }
  ).to(
    ".s5-cloud-1",
    { x: "-200vw", opacity: 1 }, "<"
  )
    .to(
      ".s5-bushes-1",
      { y: "100vh", opacity: 1 },
      "<"
    ).to(".s5-char-1", { scale: 4, x: "-20%", y: "40%" }, "<").to(".s5-ball-full", { y: "100vh ", duration: 0.2 }, "<")
}

function s5f3(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.fromTo(
    ".s5-bubbleText-1",
    { opacity: 0, scale: 0, rotate: -20 },
    { y: 0, scale: 1, rotate: 6, opacity: 1, duration: 1, ease: "bounce" }
  )
    .fromTo(
      ".s5-bubbleText-2",
      { opacity: 0, scale: 0, rotate: -20 },
      { y: 0, scale: 1, rotate: 6, opacity: 1, duration: 1, ease: "bounce" }
    )
}
