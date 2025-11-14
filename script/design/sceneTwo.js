import { createTimeline } from "../general.js";

// TODO: VARIABLE FOR EXIT REPEAT ANIMATION

// TODO: VARIABLE FOR DOM
const section = document.querySelector(".section-two");
const nextSection = document.querySelector(".section-three");
const elements = document.querySelectorAll('[class^="s2-"]');

let tl;

export function sceneTwo() {
  return new Promise((resolve) => {
    elements.forEach((elemen) => { elemen.style.opacity = 0 })
    gsapEntry();
    gsapExit(resolve);
  })
}

function gsapEntry() {

  const text = "sulit sekali untuk berkonsentrasi...";
  const textElement = document.querySelector(".typing-text");
  textElement.innerHTML = text
    .split("")
    .map((char) => `<span class="char">${char}</span>`)
    .join("");
  gsap.set(".char", { opacity: 0 });

  s2f1(".div-s2_s")
  s2f2(".div-s2_1")
  s2f3(".div-s2_2")
  s2f4(".div-s2_3")
  s2f5(".div-s2_4")
  s2f6(".div-s2_5")
}

function gsapExit(resolve) {
  tl = createTimeline({ scroll: true, trigger: ".div-s2_f" })
  tl.to(".s2-6", { x: "-100vw", duration: 1, ease: "power1.out" })
    .to(
      ".char6",
      {
        opacity: 0,
        duration: 0.5,
        stagger: 0.5,
        ease: "none"
      }
    )

    .fromTo(
      ".s3-1",
      {
        x: "-150vw",
      },
      {
        x: 0,
        duration: 3,
        ease: "power4.out",
        onComplete: () => { resolve() }
      }
    ).to(nextSection, { opacity: 1, onComplete: () => gsap.set(section, { display: "none" }) })

}

//TODO: OTHER FUNCTION BELOW
function s2f1(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.fromTo(
    ".s2-1",
    {
      x: "-100vw", opacity: 1
    },
    { x: 0, duration: 3, ease: "power1.out" }
  ).to(
    ".char",
    {
      opacity: 1,
      duration: 0.5,
      stagger: 0.5,
      ease: "none",
    },
  )
}

function s2f2(trigger) {
  const textElement2 = document.querySelector(".typing-text2");
  const text2 = "Dulu, aku bisa fokus pada momen-momen indah. Apa yang berubah..?";
  textElement2.innerHTML = text2
    .split("")
    .map((char) => `<span class="char2">${char}</span>`)
    .join("");
  gsap.set(".char2", { opacity: 0 });

  tl = createTimeline({ scroll: true, trigger })
  tl.to(".s2-1", { x: "-100vw", duration: 1, ease: "power1.out" }, ">")
    .to(
      ".char",
      {
        opacity: 0,
        duration: 0.5,
        ease: "none",
      }, "<"
    ).to(".section-two", {
      backgroundColor: "#4C4E52",
      duration: 3,
      ease: "power2.inOut",
      immediateRender: false,
    });


  tl.fromTo(
    ".s2-2",
    {
      x: "-100vw", opacity: 1
    },
    { x: 0, duration: 1, ease: "power1.out" }
  )
    .to(
      ".char2",
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.5,
        ease: "none",
      }
    )
}

function s2f3(trigger) {
  const textElement3 = document.querySelector(".typing-text3");
  const text3 = "Langkah pertama ciptakan ruang yang tenang..";
  textElement3.innerHTML = text3
    .split("")
    .map((char) => `<span class="char3">${char}</span>`)
    .join("");
  gsap.set(".char3", { opacity: 0 });

  tl = createTimeline({ scroll: true, trigger })
  tl.to(".s2-2", { x: "-100vw", duration: 1, ease: "power1.out" }, ">")
    .to(
      ".char2",
      {
        opacity: 0,
        duration: 0.5,
        ease: "none",
      }
    ).to(".section-two", {
      backgroundColor: "#D3D9E0",
      duration: 1,
      ease: "power2.inOut",
      immediateRender: false,
    });

  tl.fromTo(
    ".s2-3",
    {
      x: "-100vw", opacity: 1
    },
    { x: 0, duration: 1, ease: "power4.out" }
  )
    .to(
      ".char3",
      {
        opacity: 1,
        stagger: 0.5,
        duration: 0.5,
        ease: "none",
      },
    )
}

function s2f4(trigger) {
  const textElement4 = document.querySelector(".typing-text4");
  const text4 = "Tenangkan pikiran. Tarik napas, hembuskan.";
  textElement4.innerHTML = text4
    .split("")
    .map((char) => `<span class="char4">${char}</span>`)
    .join("");
  gsap.set(".char4", { opacity: 0 });

  tl = createTimeline({ scroll: true, trigger })
  tl.to(".s2-3", { x: "-100vw", duration: 1, ease: "power1.out" }, ">")
    .to(
      ".char3",
      {
        opacity: 0,
        duration: 0.5,
        ease: "none",
      },
    );


  tl.fromTo(
    ".s2-4",
    {
      x: "-100vw", opacity: 1
    },
    { x: 0, duration: 1, ease: "power4.out" }
  ).to(
    ".char4",
    {
      opacity: 1,
      duration: 0.5,
      stagger: 0.5,
      ease: "none",
    },
  )
}

function s2f5(trigger) {
  const textElement5 = document.querySelector(".typing-text5");
  const text5 = "Sedikit demi sedikit, fokusku meningkat.";
  textElement5.innerHTML = text5
    .split("")
    .map((char) => `<span class="char5">${char}</span>`)
    .join("");
  gsap.set(".char5", { opacity: 0 });

  tl = createTimeline({ scroll: true, trigger })
  tl.to(".s2-4", { x: "-100vw", duration: 1, ease: "power1.out" }, ">")
    .to(
      ".char4",
      {
        opacity: 0,
        duration: 0.5,
        ease: "none",
      },
    );

  tl.fromTo(
    ".s2-5",
    {
      x: "-100vw", opacity: 1
    },
    { x: 0, duration: 1, ease: "power4.out" }
  )
    .to(
      ".char5",
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.5,
        ease: "none",
      },
    )
}

function s2f6(trigger) {
  const textElement6 = document.querySelector(".typing-text6");
  const text6 = "Dan kini, aku bisa lebih hadir untuk hal-hal yang benar-benar penting.";
  textElement6.innerHTML = text6
    .split("")
    .map((char) => `<span class="char6">${char}</span>`)
    .join("");
  gsap.set(".char6", { opacity: 0 });

  tl = createTimeline({ scroll: true, trigger })
  tl.to(".s2-5", { x: "-100vw", duration: 1, ease: "power1.out" })
    .to(
      ".char5",
      {
        opacity: 0,
        duration: 0.5,
        stagger: 0.5,
        ease: "none",
      },
    )

  tl.fromTo(
    ".s2-6",
    {
      x: "-100vw", opacity: 1
    },
    { x: 0, duration: 1, ease: "power4.out" }
  ).to(
    ".char6",
    {
      opacity: 1,
      duration: 0.5,
      stagger: 0.5,
      ease: "none",
    },
  )
}