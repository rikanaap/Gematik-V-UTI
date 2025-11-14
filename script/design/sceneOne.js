import { createTimeline } from "../general.js";

// TODO: VARIABLE FOR EXIT REPEAT ANIMATION

// TODO: VARIABLE FOR DOM
const section = document.querySelector(".section-one");
const nextSection = document.querySelector(".section-two");
const notifImage = document.querySelectorAll(".s1-notif");
const bubbles = document.querySelectorAll(
  ".bubText1, .bubText2, .bubbleText3, .bubbleText4, .bubbleText5"
);

// const sectionTwo =
let tl, timeObj = { h: 0, m: 0 };

export function sceneOne() {
  return new Promise((resolve) => {
    if (section.style.display == "") {resolve(); return;}
    
    notifImage.forEach((notif) => (notif.style.opacity = 0));
    bubbles.forEach((bubble) => bubble.style.opacity = 0)
    gsapEntry();
    gsapExit(resolve);
  })
}

function gsapEntry() {

  //? OPENING
  tl = gsap.timeline()
  tl.to(".s1-notif", { scale: 0 })
  tl.fromTo(
    ".s1-hand",
    { y: "200vh", opacity: 1 },
    { y: 5, duration: 1 }
  )

  s1f1(".div-s1_1")
  s1f2(".div-s1_2")
  s1f3(".div-s1_3")
  s1f4(".div-s1_4")
  s1f5(".div-s1_5")
  s1f6(".div-s1_6")
  s1f7(".div-s1_7")
  s1f8(".div-s1_8")
  s1f9(".div-s1_9")
}

function gsapExit(resolve) {
  tl = createTimeline({ scroll: true, trigger: ".div-s1_f" })
  tl.to(".bubbleText5 h1", { opacity: 0, duration: 3, ease: "power4.out" })
    .to(".bubbleText5", { scale: 10, duration: 6, ease: "power4.inOut" })
    .to(".section-one", {
      backgroundColor: "#D3D9E0",
      duration: 0.5,
      ease: "power2.inOut",
      immediateRender: false,
    })
    .to(".bubbleText5", { scale: 0, y: "-200vh", duration: 2, ease: "power4.inOut", onComplete: () => { resolve(); } }, "<")
    .to(nextSection, { opacity: 1, onComplete: () => gsap.set(section, { display: "none" }) })
}

//TODO: OTHER FUNCTION BELOW
function s1f1(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.to(
    ".s1-hand",
    {
      rotate: 25,
      y: 75,
      duration: 1,
      ease: "power2.out",
    },
  ).to(".s1-notif:nth-child(1)", {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "power3.out",
  }, "<")
}

function s1f2(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.to(
    ".s1-hand",
    {
      rotate: -15,
      y: 30,
      duration: 1,
      ease: "power2.out",
    },
  ).to(".s1-notif:nth-child(2), .s1-notif:nth-child(3)", {
    opacity: 1,
    scale: 1,
    duration: 1,
    stagger: 0.5,
    ease: "power3.out",
  }, "<")
}

function s1f3(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.to(".s1-hand", {
    rotate: 0,
    y: 27,
    duration: 1,
    ease: "power2.out",
  }).to(".s1-notif:nth-child(+n+3)", {
    opacity: 1,
    scale: 1,
    duration: 1,
    stagger: 0.5,
    ease: "power3.out",
  }, "<")
}

function s1f4(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.to(
    ".s1-hand",
    {
      y: "100%",
      duration: 5,
      ease: "power1.out",
    },
  ).fromTo(
    ".s1-hp",
    {
      y: "-200vh",
      opacity: 1,
    },
    {
      y: 200,
      duration: 5,
      ease: "power2.out",
    }, "<"
  ).fromTo(
    ".time",
    {
      y: "-200vh",
      opacity: 1,
    },
    {
      y: 200,
      duration: 5,
      ease: "power2.out",
    },
    "<"
  )

  tl.to(".s1-notif:nth-child(1)", {
    x: 100,
    duration: 1,
    ease: "power2.out",
  }, "<").to(
    ".s1-notif:nth-child(4)",
    {
      x: 140,
      y: -100,
      duration: 1,
      ease: "power2.out",
    }, "<"
  )
    .to(
      ".s1-notif:nth-child(5)",
      {
        x: 50,
        y: 70,
        duration: 1,
        ease: "power2.out",
      }, "<"
    )
    .to(
      ".s1-notif:nth-child(6)",
      {
        x: -500,
        y: 180,
        scale: 0.7,
        duration: 1,
        ease: "power2.out",
      }, "<"
    )
    .to(
      ".s1-notif:nth-child(3)",
      {
        x: -140,
        y: -100,
        duration: 1,
        ease: "power2.out",
      }, "<"
    )
    .to(
      ".s1-notif:nth-child(2)",
      {
        x: -50,
        y: 70,
        duration: 1,
        ease: "power2.out",
      }, "<"
    )
}

function s1f5(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.to(".time", {
    y: 100,
    duration: 1,
    ease: "power2.out",
  }).to(timeObj, {
    h: 15,
    m: 59,
    duration: 5,
    ease: "none",
    onUpdate: () => {
      const h = String(Math.floor(timeObj.h)).padStart(2, "0");
      const m = String(Math.floor(timeObj.m)).padStart(2, "0");
      document.querySelector(".time").textContent = `${h}:${m}`;
    }
  }).to(
    ".time",
    {
      color: "#ADAFB3",
      duration: 3,
      ease: "power2.inOut",
    },
    "<"
  ).to(
    ".section-one",
    {
      backgroundColor: "#20262D",
      duration: 3,
      ease: "power2.inOut",
      immediateRender: false,
    },
    "<"
  ).to(".s1-notif:nth-child(-n+6)", {
    opacity: 0,
    scale: 0,
    rotate: 50,
    stagger: 0.8,
    duration: 4,
    ease: "power3.out",
  }, "<")

  tl.to(
    ".s1-hp",
    {
      y: "200%",
      duration: 5,
      ease: "power1.out",
    }
  ).to(
    timeObj,
    {
      h: 24,
      m: 59,
      duration: 3,
      ease: "none",
      onUpdate: () => {
        const h = String(Math.floor(timeObj.h)).padStart(2, "0");
        const m = String(Math.floor(timeObj.m)).padStart(2, "0");
        document.querySelector(".time").textContent = `${h}:${m}`;
      },
    },
    "<1"
  ).to(
    ".time",
    {
      scale: 3,
      y: () => window.innerHeight / 2 - document.querySelector(".time").offsetHeight / 2,
      duration: 3,
      ease: "power3.out",
    },
    "<"
  )
}

function s1f6(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.to(
    ".section-one",
    {
      backgroundColor: "#000",
      duration: 1,
      ease: "power2.inOut",
      immediateRender: false,
    }
  ).to(".time", {
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
  })
}

function s1f7(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.fromTo(
    ".bubText1",
    {
      y: "200vh",
      opacity: 0.5,
    },
    {
      y: 0,
      opacity: 1,
      duration: 3,
      ease: "power4.out",
    },
    "<"
  )
    .fromTo(
      ".bubText2",
      {
        y: "200vh",
        opacity: 0.5,
      },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: "power4.out",
      }, "<"
    )
}

function s1f8(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.to([".bubText1", ".bubText2"], {
    y: "-200vh",
    duration: 3,
    ease: "power2.out",
  }, ">").fromTo(
    ".bubbleText3",
    {
      y: "200vh",
      opacity: 0.5,
    },
    {
      y: 0,
      duration: 2,
      opacity: 1,
      ease: "power4.out",
    },
    "<"
  ).fromTo(
    ".bubbleText4",
    {
      y: "200vh",
      opacity: 0.5,
    },
    {
      y: 0,
      duration: 2,
      opacity: 1,
      ease: "power4.out",
    }, "<"
  )
}

function s1f9(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.to([".bubbleText3", ".bubbleText4"], {
    y: "-200vh",
    duration: 3,
    ease: "power2.out",
  }, ">").fromTo(
    ".bubbleText5",
    {
      y: "200vh",
      opacity: 0.5
    },
    {
      y: 0,
      opacity: 1,
      duration: 3,
      ease: "power2.out",
    },
    "<"
  )
}