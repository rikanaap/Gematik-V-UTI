import { createTimeline } from "../general.js";

// TODO: VARIABLE FOR EXIT REPEAT ANIMATION

// TODO: VARIABLE FOR DOM
const section = document.querySelector(".scene-four-wrap"); //!! CHANGE SECTION NAME
const nextSection = document.querySelector(".scene-five-wrap"); //!! CHANGE SECTION NAME
const elements = document.querySelectorAll('[class^="s4-"]');

const s4_1 = document.querySelector(".s4-1");
const s4_2 = document.querySelector(".s4-2");
const s4_3 = document.querySelector(".s4-3");
const s4_4 = document.querySelector(".s4-4");
const s4_5 = document.querySelector(".s4-5");
const s4_6 = document.querySelector(".s4-6");
const s4_7 = document.querySelector(".s4-7");
const s4_8 = document.querySelector(".s4-8");
const textElement9 = document.querySelector(".typing-text9");
const textElement10 = document.querySelector(".typing-text10");
const textElement11 = document.querySelector(".typing-text11");
const textElement12 = document.querySelector(".typing-text12");
const textElement13 = document.querySelector(".typing-text13");

let tl;
export function sceneFour() {
  return new Promise((resolve) => {
    elements.forEach((elemen) => { elemen.style.opacity = 0 })
    gsapEntry();
    gsapExit(resolve);
  })
}

function gsapEntry() {
  const text9 = "Tidur berkualitas... mengembalikan energimu.";
  const text10 = "Dulu, energi hanya cukup untuk...";
  const text11 = "...scroll sendirian.";
  const text12 = "Tapi kini, kamu memilih untuk hadir.";
  const text13 = "Menemukan kembali momen berharga.";
  textElement9.innerHTML = text9
    .split("")
    .map((char) => `<span class="char9">${char}</span>`)
    .join("");
  textElement10.innerHTML = text10
    .split("")
    .map((char) => (char === "|" ? "<br/>" : `<span class="char10">${char}</span>`))
    .join("");
  textElement11.innerHTML = text11
    .split("")
    .map((char) => `<span class="char11">${char}</span>`)
    .join("");
  textElement12.innerHTML = text12
    .split("")
    .map((char) => `<span class="char12">${char}</span>`)
    .join("");
  textElement13.innerHTML = text13
    .split("")
    .map((char) => (char === "|" ? "<br/>" : `<span class="char13">${char}</span>`))
    .join("");

  gsap.set(".char9", { opacity: 0 });
  gsap.set(".char10", { opacity: 0 });
  gsap.set(".char11", { opacity: 0 });
  gsap.set(".typing-text11", { opacity: 0 });
  gsap.set(".char12", { opacity: 0 });
  gsap.set(".typing-text12", { opacity: 0 });
  gsap.set(".char13", { opacity: 0 });



  tl = createTimeline({ scroll: true, trigger: ".div-s4_s" })
  tl.fromTo(
    ".s4-2",
    { x: "100vw", opacity: 0 },
    { x: 0, opacity: 1, duration: 5, ease: "power2.out" })
    .fromTo(
      ".s4-1",
      { x: "-100vw", opacity: 1 },
      { x: 0, duration: 5, ease: "power2.out" },
      "<")
    .to(
      ".char9",
      { opacity: 1, duration: 14, stagger: { each: 0.15, from: "start" }, ease: "none" }
    )
    .to(
      [".s4-1", ".s4-2"],
      { x: "-100vw", duration: 6, ease: "power2.inOut", delay: 5 }
    )
    .to(
      ".char9",
      { opacity: 0, duration: 8, stagger: 0.12, ease: "none" }
    );

  s4f1(".div-s4_1")
  s4f2(".div-s4_2")
  s4f3(".div-s4_3")
  s4f4(".div-s4_4")
}

function gsapExit(resolve) {
  tl = createTimeline({ scroll: true, trigger: ".div-s4_f" })
  tl.to(nextSection, { opacity: 1, onComplete: () => gsap.set(section, { display: "none" }) })
}

//TODO: OTHER FUNCTION BELOW
function s4f1(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.fromTo(
    ".s4-3",
    { x: "-100vw", opacity: 1 },
    { x: 0, duration: 5, ease: "power2.out" }
  )
    .fromTo(
      ".s4-4",
      { x: "100vw", opacity: 1 },
      { x: 0, duration: 5, ease: "power2.out" },
      "<"
    )
    .to(
      ".char10",
      { opacity: 1, duration: 56, stagger: { each: 0.15, from: "start" }, ease: "none" }
    )
    .to(
      ".char10",
      { opacity: 0, duration: 8, stagger: 0.12, ease: "none" }
    );

}

function s4f2(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.to(
    ".s4-3",
    { scale: 1.25, duration: 5, ease: "power2.out" }
  )
    .to(
      ".s4-4-blur",
      { opacity: 1, duration: 5, ease: "power2.out" },
      "<"
    )
    .to(".typing-text11", { opacity: 4, duration: 1 })
    .to(
      ".char11",
      { opacity: 1, duration: 56, stagger: { each: 0.15, from: "start" }, ease: "none" }
    ).to({}, { duration: 16 })
    .to(
      [".s4-3"],
      { x: "-100vw", duration: 6, ease: "power2.inOut" }
    )
    .to(
      ".char11",
      { opacity: 0, duration: 8, stagger: 0.12, ease: "none" }
    );
}

function s4f3(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.fromTo(
    ".s4-6",
    { x: "-100vw", scale: 1, opacity: 1 },
    { x: 0, scale: 1, duration: 5, ease: "power2.out" }
  )
    .to(
      ".s4-6",
      { scale: 1.25, duration: 12, ease: "power1.inOut", transformOrigin: "left center" }
    )
    .to(".typing-text12", { opacity: 1, duration: 1 })
    .to(
      ".char12",
      { opacity: 1, duration: 56, stagger: { each: 0.15, from: "start" }, ease: "none" }
    )
    .to(
      [".s4-6", ".s4-4", ".s4-4-blur"],
      { x: "-100vw", duration: 6, ease: "power2.inOut", delay: 5 }
    )
    .to(
      ".char12",
      { opacity: 0, duration: 8, stagger: 0.12, ease: "none" }
    );
}

function s4f4(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.fromTo(
    ".s4-8",
    { x: "-100vw", scale: 1, opacity: 1 },
    { x: 0, scale: 1, duration: 5, ease: "power2.out" }
  )
    .to(
      ".s4-8",
      { scale: 1.05, duration: 12, ease: "power1.inOut", transformOrigin: "left center" },
      "<"
    )
    .to(
      ".char13",
      { opacity: 1, duration: 56, stagger: { each: 0.15, from: "start" }, ease: "none" }
    )
    .to({}, { duration: 16 })
    .to(
      ".s4-8",
      { x: "-100vw", duration: 6, ease: "power2.inOut", delay: 5 }
    )
    .to(
      ".char13",
      { opacity: 0, duration: 8, stagger: 0.12, ease: "none" }
    )
}
