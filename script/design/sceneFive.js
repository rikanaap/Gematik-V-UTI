import { createTimeline } from "../general.js";

// TODO: VARIABLE FOR EXIT REPEAT ANIMATION

// TODO: VARIABLE FOR DOM
const section = document.querySelector(".section-five"); //!! CHANGE SECTION NAME
const nextSection = document.querySelector(".closing")
const elements = document.querySelectorAll('[class^="s5-"]');

let tl, timeObj = { h: 0, m: 0 }, scrollYS3;

export function sceneFive() {
  return new Promise((resolve) => {
    // if (section.style.display == "") {resolve(); return;}

    elements.forEach((elemen) => { elemen.style.opacity = 0 })

    gsapEntry()
    gsapExit(resolve)
  })
}

function gsapEntry() {
  tl = createTimeline()
  s5f1(".div-s5_s")
  s5f2(".div-s5_1")
  s5f3(".div-s5_2")
  s5f5(".div-s5_3")
  s5f6(".div-s5_4")
}

function gsapExit(resolve) {
  tl = createTimeline({ scroll: true, end: "+=3000", trigger: ".div-s5_f" })
  tl.to(".s5-10", { opacity: 1, duration: 1 }).set(".s5-11", { opacity: 1 }, "<").to(".s5-11", {
    y: "-400vh", duration: 3, delay: 0.5
  }).to(".s5-10, .s5-11, .s5-1, .s5-9", { opacity: 0, onComplete: () => { resolve() } })
  .to(nextSection, { opacity: 1, onComplete: () => gsap.to(section, { display: "none", backgroundColor: "#20262D" }) })

}

//TODO: OTHER FUNCTION BELOW
function s5f1(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.fromTo(".s5-2", {
    y: "200vh", opacity: 1
  }, {
    y: 0, duration: 1
  }).fromTo(".s5-1", {
    y: "-200vh", opacity: 1
  }, {
    y: 0, duration: 1
  }, "<")

  tl.fromTo(".s5-3", {
    height: 0,
    opacity: 1
  }, {
    height: 70,
    duration: 1
  }).fromTo(".s5-4", {
    height: 0,
    opacity: 1
  }, {
    height: 70,
    duration: 1
  }, "<")
}

function s5f2(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.to(".s5-4", {
    height: 250
  }).to(timeObj, {
    h: 4,
    m: 36,
    duration: 1,
    ease: "none",
    onUpdate: () => {
      const h = String(Math.floor(timeObj.h)).padStart(2, "0");
      const m = String(Math.floor(timeObj.m)).padStart(2, "0");
      document.querySelector(".s5-1").textContent = `${h}:${m}`;
    }
  })

  tl.set(".s5-5", { opacity: 1, width: 120 }).to(".s5-7", { y: -250, opacity: 1 })
}

function s5f3(trigger) {
  tl = createTimeline({ scroll: true, trigger, end: "+=2000" })
  tl.to(".s5-7", { y: 0 }).set(".s5-6", { width: 120 }, "<").to(".s5-5", { opacity: 0, duration: 0.5 }, "<").to(".s5-6", { opacity: 1, duration: 0.5 }, "<")
    .to(".s5-4", {
      backgroundColor: "#20262D",
      height: 0,
      duration: 0.5
    }, "<").to(".s5-3", {
      height: 350,
      duration: 1
    }, "<").to(".s5-notif:nth-child(-n+7)", {
      scale: 1,
      opacity: 1,
      stagger: 0.1
    }, "<").to(timeObj, {
      h: 9999999,
      m: 9999999,
      duration: 1,
      ease: "none",
      onUpdate: () => {
        const h = String(Math.floor(timeObj.h)).padStart(2, "0");
        const m = String(Math.floor(timeObj.m)).padStart(2, "0");
        document.querySelector(".s5-1").textContent = `${h}:${m}`;
      }
    }, "<").to(".s5-1", {
      y: 30,
      rotate: 10,
      scale: 1.5
    }).fromTo(".s5-8", {
      opacity: 1,
      rotate: 0,
      y: "-200vh"
    }, { y: 0, rotate: 10 }).set(".section-five", {
      backgroundColor: "#000000", onComplete: () => {
        scrollYS3 = window.scrollY

        let lastScroll = Date.now();
        window.addEventListener("scroll", () => { lastScroll = Date.now(); });
        const trig = document.querySelector(trigger);

        const trigY = trig.getBoundingClientRect().top + window.scrollY;
        ScrollTrigger.getAll().forEach(st => {
          const start = st.start || 0;
          if (start > trigY) st.disable();
        });

        const interval = setInterval(() => {
          if (Date.now() - lastScroll > 3000) {
            clearInterval(interval);
            window.scrollTo({
              top: scrollYS3 + 100,
              behavior: "auto"
            });
            s5f4();
          }
        }, 300);
      }
    })
}

function s5f4() {
  tl = createTimeline()
  tl.to(".section-five", { backgroundColor: '#20262D', duration: 3 })
    .to(".s5-8", { rotate: 0, y: "-200vh", duration: 3 }, "<")
    .to(".s5-3", { height: 10, duration: 1.5 }, "<")
    .to(".s5-notif:nth-child(-n+7)", {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      stagger: 0.3
    }, "<")
    .to(timeObj, {
      h: 4,
      m: 36,
      duration: 3,
      ease: "none",
      onUpdate: () => {
        const h = String(Math.floor(timeObj.h)).padStart(2, "0");
        const m = String(Math.floor(timeObj.m)).padStart(2, "0");
        document.querySelector(".s5-1").textContent = `${h}:${m}`;
      }
    }, "<").to(".s5-1", {
      y: 0,
      rotate: 0,
      scale: 1,
      duration: 3,
      onComplete: () => {
        ScrollTrigger.getAll().forEach(st => st.enable())
        window.scrollTo({
          top: scrollYS3 + 100,
          behavior: "auto"
        });
      }
    }, "<")
}

function s5f5(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.to(".s5-4", { height: 250, duration: 1, backgroundColor: "#D9D9D9" }).to(timeObj, {
    h: 23,
    m: 59,
    duration: 1,
    ease: "none",
    onUpdate: () => {
      const h = String(Math.floor(timeObj.h)).padStart(2, "0");
      const m = String(Math.floor(timeObj.m)).padStart(2, "0");
      document.querySelector(".s5-1").textContent = `${h}:${m}`;
    }
  }).set(".s5-7", { opacity: 0 }, "<").to(".s5-2", { opacity: 0, duration: 0.5 }, "<")
    .to(".s5-1", {
      scale: 3,
      y: () => window.innerHeight / 2 - document.querySelector(".time").offsetHeight / 2,
      duration: 1,
    }).to("section-five", { backgroundColor: "#000000", duration: 1 }, "<")
}

function s5f6(trigger) {
  tl = createTimeline({ scroll: true, trigger })
  tl.to(".s5-1", { scale: 1, y: 10, duration: 1, color: "#4c4e52" })
    .to(timeObj, {
      h: 12,
      m: 4,
      duration: 1,
      ease: "none",
      onUpdate: () => {
        const h = String(Math.floor(timeObj.h)).padStart(2, "0");
        const m = String(Math.floor(timeObj.m)).padStart(2, "0");
        document.querySelector(".s5-1").textContent = `${h}:${m}`;
      }
    }, "<")
    .fromTo(".s5-9", {
      y: "200vh", opacity: 1
    }, { y: 0, duration: 1 }, "<")
    .to(".section-five", { backgroundColor: "#D3D9E0", duration: 1 }, "<")
}
