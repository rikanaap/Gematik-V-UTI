// TODO: VARIABLE FOR EXIT REPEAT ANIMATION

// TODO: VARIABLE FOR DOM
const sectionOne = document.querySelector(".section-one");
const notifImage = document.querySelectorAll(".s1-notif");
// const sectionTwo =

export function sceneOne(tl) {
  notifImage.forEach((notif) => (notif.style.opacity = 0));
  gsapEntry(tl);
  gsapExit(tl);
}

function gsapEntry(tl) {
  tl = gsap.timeline();
  tl.fromTo(
    ".s1-hand",
    {
      y: "200vh",
      opacity: 1,
    },
    {
      y: 27,
      duration: 1,
    }
  );

  const timeObj = { h: 0, m: 0 };

  //? FIRST APPEARANCE
  tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".div-s1", // element to watch
      start: "center center",
      end: "+=2000",
      scrub: true, // makes it smooth + tied to scroll
      markers: true, // show start/end markers (for debugging)
    },
  });
  tl.to(".s1-notif:nth-child(-n+3)", {
    opacity: 1,
    scale: 1,
    duration: 1.5,
    stagger: 0.4,
    ease: "power3.out",
  })
    .to(
      ".s1-hand",
      {
        rotate: 15,
        duration: 2,
        ease: "power2.out",
      },
      "<"
    )
    .to(".s1-notif:nth-child(n+4):nth-child(-n+6)", {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      stagger: 0.4,
      ease: "power3.out",
    })
    .to(
      ".s1-hand",
      {
        rotate: -25,
        y: 76,
        duration: 2,
        ease: "power2.out",
      },
      "<"
    )
    .to(".s1-hand", {
      rotate: 0,
      y: 27,
      duration: 2,
      ease: "power2.out",
    })
    .to(
      ".s1-hand",
      {
        y: "200vh",
        duration: 3,
        ease: "power2.out",
      },
      ">2"
    )
    .to(".s1-notif:nth-child(1)", {
      x: 100,
      duration: 1.5,
      ease: "power2.out",
    })
    .to(
      ".s1-notif:nth-child(2)",
      {
        x: 140,
        y: -100,
        duration: 1.5,
        ease: "power2.out",
      },
      "<"
    )
    .to(
      ".s1-notif:nth-child(3)",
      {
        x: 50,
        y: 70,
        duration: 1.5,
        ease: "power2.out",
      },
      "<"
    )
    .to(
      ".s1-notif:nth-child(4)",
      {
        x: -500,
        y: 180,
        scale: 0.7,
        duration: 1.5,
        ease: "power2.out",
      },
      "<"
    )
    .to(
      ".s1-notif:nth-child(5)",
      {
        x: -140,
        y: -100,
        duration: 1.5,
        ease: "power2.out",
      },
      "<"
    )
    .to(
      ".s1-notif:nth-child(6)",
      {
        x: -50,
        y: 70,
        duration: 1.5,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      ".s1-hp",
      {
        y: "-200vh",
        opacity: 1,
      },
      {
        y: 200,
        duration: 2,
        ease: "power2.out",
      },
      "<"
    )
    .fromTo(
      ".time",
      {
        y: "-200vh",
        opacity: 1,
      },
      {
        y: 200,
        duration: 2,
        ease: "power2.out",
      },
      "<"
    )
    .to(".time", {
      y: 100,
      duration: 2,
      ease: "power2.out",
    })
    .to(timeObj, {
      h: 15,
      m: 59,
      duration: 2,
      ease: "none",
      onUpdate: () => {
        const h = String(Math.floor(timeObj.h)).padStart(2, "0");
        const m = String(Math.floor(timeObj.m)).padStart(2, "0");
        document.querySelector(".time").textContent = `${h}:${m}`;
      },
    })
    .to(
      ".time",
      {
        color: "#ADAFB3",
        duration: 2,
        ease: "power2.inOut",
      },
      "<"
    )
    .to(
      ".section-one",
      {
        backgroundColor: "#20262D",
        duration: 2,
        ease: "power2.inOut",
        immediateRender: false,
      },
      "<"
    )
    .to(".s1-notif:nth-child(-n+6)", {
      opacity: 0,
      scale: 0.5,
      duration: 2,
      stagger: 0.4,
      ease: "power3.out",
    })
    .to(
      ".s1-hp",
      {
        y: "200vh",
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      },
      "<"
    )
    .to(
      timeObj,
      {
        h: 24,
        m: 59,
        duration: 2,
        ease: "none",
        onUpdate: () => {
          const h = String(Math.floor(timeObj.h)).padStart(2, "0");
          const m = String(Math.floor(timeObj.m)).padStart(2, "0");
          document.querySelector(".time").textContent = `${h}:${m}`;
        },
      },
      "<1"
    )
    .to(
      ".time",
      {
        scale: 3,
        y: () => window.innerHeight / 2 - document.querySelector(".time").offsetHeight / 2,
        duration: 2,
        ease: "power3.out",
      },
      "<"
    )
    .to(
      ".section-one",
      {
        backgroundColor: "#000",
        duration: 2,
        ease: "power2.inOut",
        immediateRender: false,
      },
      "<"
    )
    .to(".time", {
      opacity: 0,
      duration: 2,
      ease: "power2.inOut",
    })
    .fromTo(
      [".bubText1", ".bubText2"],
      {
        y: "200vh",
        ease: "power4.out",
      },
      {
        y: 0,
        duration: 2,
        ease: "power4.out",
      },
      "<"
    )
    .to([".bubText1", ".bubText2"], {
      y: "-200vh",
      duration: 2,
      ease: "power4.out",
    })
    .fromTo(
      [".bubbleText3", ".bubbleText4"],
      {
        y: "200vh",
        ease: "power4.out",
      },
      {
        y: 0,
        duration: 2,
        ease: "power4.out",
      },
      "<"
    )
    .to([".bubbleText3", ".bubbleText4"], {
      y: "-200vh",
      duration: 2,
      ease: "power4.out",
    })
    .fromTo(
      ".bubbleText5",
      {
        y: "200vh",
        ease: "power4.out",
      },
      {
        y: 0,
        duration: 2,
        ease: "power4.out",
      },
      "<"
    )
    .to(".bubbleText5 h1", { opacity: 0, duration: 2, ease: "power4.out" })
    .to(".bubbleText5", { scale: 10, duration: 5, ease: "power4.inOut" })
    .to(".section-one", {
      backgroundColor: "#D3D9E0",
      duration: 0.5,
      ease: "power2.inOut",
      immediateRender: false,
    })
    .to(".bubbleText5", { scale: 0, y: "-200vh", duration: 1, ease: "power4.inOut" }, "<");
}

function gsapExit(tl) {}

//TODO: OTHER FUNCTION BELOW
