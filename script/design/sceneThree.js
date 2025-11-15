import { createTimeline } from "../general.js";

// TODO: VARIABLE FOR EXIT REPEAT ANIMATION

// TODO: VARIABLE FOR DOM
const section = document.querySelector(".section-three");
const nextSection = document.querySelector(".scene-four-wrap")
const elements = document.querySelectorAll('[class^="s3-"], .bubbleText6, .bubbleText7');

let tl;

export function sceneThree() {
  return new Promise((resolve) => {
    elements.forEach((elemen) => { elemen.style.opacity = 0 })
    gsapEntry();
    gsapExit(resolve);
  })
}

function gsapEntry() {
  s3f1(".div-s3_s")
  s3f2(".div-s3_1")
  s3f3(".div-s3_2")
  s3f4(".div-s3_3")
}

function gsapExit(resolve) {
  tl = createTimeline({ scroll: true, trigger: ".div-s3_f" })
  tl.to(".s3-4", {
    x: "-150vw",
    duration: 1,
    ease: "power4.out",
  }).to(".s3-2", {
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  }).to(".s3-3", {
    y: "-100vh",
    duration: 1,
    ease: "power4.out",
    onComplete: () => { resolve() }
  },
    "<"
  ).to(nextSection, { opacity: 1 }).set(section, { display: "none", duration: 0, backgroundColor: "#76B3C9" }, "<")
}

//TODO: OTHER FUNCTION BELOW
function s3f1(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.fromTo(
    ".s3-1",
    {
      x: "-150vw", opacity: 1
    },
    {
      x: 0,
      duration: 1,
      ease: "power4.out",
    }, ">"
  ).fromTo(
    ".bubbleText6",
    {
      y: "100vh", opacity: 1
    },
    {
      y: 0,
      duration: 1,
      ease: "power4.out",
    },
  ).fromTo(
    ".bubbleText7",
    {
      y: "100vh", opacity: 1
    },
    {
      y: 0,
      duration: 1,
      ease: "power4.out",
    }
  )

  tl.to(".bubbleText6", {
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  })
    .to(".bubbleText7", {
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })

  tl.fromTo(
    ".s3-2",
    {
      x: "150vw",
      y: "-150vh", opacity: 1
    },
    {
      x: 0,
      y: 0,
      duration: 1,
      ease: "power4.out",
    }
  );
}

function s3f2(trigger) {
  const textElement7 = document.querySelector(".typing-text7");
  const text7 = "Kualitas tidur buruk karena penggunaan handphone";
  textElement7.innerHTML = text7
    .split("")
    .map((char) => `<span class="char7">${char}</span>`)
    .join("");
  gsap.set(".char7", { opacity: 0 });

  tl = createTimeline({ scroll: true, trigger })
  tl.to(
    ".char7",
    {
      opacity: 1,
      duration: 1,
      stagger: 0.5,
      ease: "none",
    }
  ).to(
    ".char7",
    {
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.5,
      ease: "none",
    },
  );
}

function s3f3(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.fromTo(
    ".s3-3",
    {
      y: "-100vh", opacity: 1
    },
    {
      y: 0,
      duration: 1,
      ease: "power4.out",
    }
  )
    .to(
      ".s3-1",
      {
        x: "-100vw",
        duration: 1,
        ease: "power4.out",
      },
      "<"
    )
    .to(
      ".s3-2",
      {
        scale: 5,
        duration: 1,
        ease: "power4.out",
      },
      "<"
    )
    .fromTo(
      ".s3-4",
      {
        x: "-150vw", opacity: 1
      },
      {
        x: 0,
        duration: 3,
        ease: "power4.out",
      }
    )
}

function s3f4(trigger) {
  const textElement8 = document.querySelector(".typing-text8");
  const text8 = "Bisa dihentikan dengan melepas handphone saat malam";
  textElement8.innerHTML = text8
    .split("")
    .map((char) => `<span class="char8">${char}</span>`)
    .join("");
  gsap.set(".char8", { opacity: 0 });

  tl = createTimeline({ scroll: true, trigger })
  tl.to(
    ".char8",
    {
      opacity: 1,
      duration: 1,
      stagger: 0.5,
      ease: "none",
    },
  ).to(
    ".char8",
    {
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.5,
      ease: "none",
    }
  )
}