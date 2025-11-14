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
}

s5f1(".div-s5_1")
s5f2(".div-s5_2")

function gsapExit(resolve) {

}

//TODO: OTHER FUNCTION BELOW
// ===== SCENE FIVE: Playing Ball Animation =====

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
      duration: 5,
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
    )
}

// tl
//   .to(
//     ".s5-cloud-1",
//     { x: "-200vw", opacity: 0, duration: 4, ease: "power2.inOut" },
//     "<"
//   )
//   .to(
//     ".s5-bushes-1",
//     { y: "100vh", opacity: 0, duration: 4, ease: "power2.inOut" },
//     "<"
//   )
//   .to([".s5-char-dribble-6", ".s5-ball-dribble-6"], { opacity: 0, duration: 1 })
//   .to(
//     [".s5-char-3", ".s5-ball-final"],
//     { opacity: 1, duration: 1 },
//     "<"
//   )
//   .to({}, { duration: 4 })
//   .fromTo(
//     ".bubbleText-s5-1",
//     { y: "100vh", opacity: 0 },
//     { y: 0, opacity: 1, duration: 6, ease: "power2.out" }
//   )
//   .to({}, { duration: 12 })
//   .fromTo(
//     ".bubbleText-s5-2",
//     { y: "100vh", opacity: 0 },
//     { y: 0, opacity: 1, duration: 6, ease: "power2.out" }
//   )
//   .to({}, { duration: 14 })
//   .to(
//     [".bubbleText-s5-1", ".bubbleText-s5-2"],
//     { y: "-100vh", opacity: 0, duration: 5, ease: "power2.inOut", stagger: 0.5 }
//   );