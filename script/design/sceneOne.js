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
  const timeObj = { h: 0, m: 0 };

  //? FIRST APPEARANCE
  tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".div-s1", // element to watch
      start: "center center",
      end: "+=4000",
      scrub: true, // makes it smooth + tied to scroll
      markers: true, // show start/end markers (for debugging)
    },
  });
  tl.fromTo(
    ".s1-hand",
    {
      y: "200vh",
      opacity: 1,
    },
    {
      y: 27,
      duration: 2,
    }
  )
    .to(".s1-notif:nth-child(-n+3)", {
      opacity: 1,
      scale: 1,
      duration: 2.5,
      stagger: 0.5,
      ease: "power3.out",
    })
    .to(
      ".s1-hand",
      {
        rotate: 15,
        duration: 3,
        ease: "power2.out",
      },
      "<"
    )
    .to(".s1-notif:nth-child(n+4):nth-child(-n+6)", {
      opacity: 1,
      scale: 1,
      duration: 2.5,
      stagger: 0.5,
      ease: "power3.out",
    })
    .to(
      ".s1-hand",
      {
        rotate: -25,
        y: 76,
        duration: 3,
        ease: "power2.out",
      },
      "<"
    )
    .to(".s1-hand", {
      rotate: 0,
      y: 27,
      duration: 3,
      ease: "power2.out",
    })
    .to(
      ".s1-hand",
      {
        y: "200vh",
        duration: 5,
        ease: "power2.out",
      },
      ">2"
    )
    .to(".s1-notif:nth-child(1)", {
      x: 100,
      duration: 3,
      ease: "power2.out",
    })
    .to(
      ".s1-notif:nth-child(2)",
      {
        x: 140,
        y: -100,
        duration: 3,
        ease: "power2.out",
      },
      "<"
    )
    .to(
      ".s1-notif:nth-child(3)",
      {
        x: 50,
        y: 70,
        duration: 3,
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
        duration: 3,
        ease: "power2.out",
      },
      "<"
    )
    .to(
      ".s1-notif:nth-child(5)",
      {
        x: -140,
        y: -100,
        duration: 3,
        ease: "power2.out",
      },
      "<"
    )
    .to(
      ".s1-notif:nth-child(6)",
      {
        x: -50,
        y: 70,
        duration: 3,
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
        duration: 3,
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
        duration: 3,
        ease: "power2.out",
      },
      "<"
    )
    .to(".time", {
      y: 100,
      duration: 3,
      ease: "power2.out",
    })
    .to(timeObj, {
      h: 15,
      m: 59,
      duration: 3,
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
        duration: 3,
        ease: "power2.inOut",
      },
      "<"
    )
    .to(
      ".section-one",
      {
        backgroundColor: "#20262D",
        duration: 3,
        ease: "power2.inOut",
        immediateRender: false,
      },
      "<"
    )
    .to(".s1-notif:nth-child(-n+6)", {
      opacity: 0,
      scale: 0.5,
      duration: 3,
      stagger: 0.4,
      ease: "power3.out",
    });
  tl.to({}, { duration: 3 })
    .to(
      ".s1-hp",
      {
        y: "200vh",
        opacity: 1,
        duration: 3,
        ease: "power2.out",
      },
      "<"
    )
    .to(
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
    )
    .to(
      ".time",
      {
        scale: 3,
        y: () => window.innerHeight / 2 - document.querySelector(".time").offsetHeight / 2,
        duration: 3,
        ease: "power3.out",
      },
      "<"
    )
    .to(
      ".section-one",
      {
        backgroundColor: "#000",
        duration: 3,
        ease: "power2.inOut",
        immediateRender: false,
      },
      "<"
    )
    .to(".time", {
      opacity: 0,
      duration: 3,
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
        duration: 3,
        ease: "power4.out",
      },
      "<"
    )
    .to({}, { duration: 6 })

    .to([".bubText1", ".bubText2"], {
      y: "-200vh",
      duration: 3,
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
        duration: 3,
        ease: "power4.out",
      },
      "<"
    )
    .to([".bubbleText3", ".bubbleText4"], {
      y: "-200vh",
      duration: 3,
      ease: "power4.out",
    })
    .to({}, { duration: 3 })

    .fromTo(
      ".bubbleText5",
      {
        y: "200vh",
        ease: "power4.out",
      },
      {
        y: 0,
        duration: 3,
        ease: "power4.out",
      },
      "<"
    )
    .to({}, { duration: 6 })

    .to(".bubbleText5 h1", { opacity: 0, duration: 3, ease: "power4.out" })
    .to({}, { duration: 6 })

    .to(".bubbleText5", { scale: 10, duration: 6, ease: "power4.inOut" })
    .to(".section-one", {
      backgroundColor: "#D3D9E0",
      duration: 0.5,
      ease: "power2.inOut",
      immediateRender: false,
    })
    .to(".bubbleText5", { scale: 0, y: "-200vh", duration: 2, ease: "power4.inOut" }, "<");

  const textElement = document.querySelector(".typing-text");
  const text = "sulit sekali untuk berkonsentrasi...";
  textElement.innerHTML = text
    .split("")
    .map((char) => `<span class="char">${char}</span>`)
    .join("");
  gsap.set(".char", { opacity: 0 });

  tl.fromTo(
    ".s2-1",
    {
      x: "-100vw",
    },
    { x: 0, duration: 3, ease: "power4.out" }
  )
    .to(
      ".char",
      {
        opacity: 1,
        duration: 3,
        stagger: 0.05,
        ease: "none",
      },
      "<0.5"
    )
    .to({}, { duration: 6 })
    .to(".s2-1", { x: "-100vw", duration: 6, ease: "power4.out", delay: 5 })
    .to(
      ".char",
      {
        opacity: 0,
        duration: 3,
        stagger: 0.05,
        ease: "none",
      },
      "<0.5"
    )
    .to(".section-one", {
      backgroundColor: "#4C4E52",
      duration: 3,
      ease: "power2.inOut",
      immediateRender: false,
    });

  const textElement2 = document.querySelector(".typing-text2");
  const text2 = "Dulu, aku bisa fokus pada momen-momen indah. Apa yang berubah..?";
  textElement2.innerHTML = text2
    .split("")
    .map((char) => `<span class="char2">${char}</span>`)
    .join("");
  gsap.set(".char2", { opacity: 0 });

  tl.to({}, { duration: 6 })

    .fromTo(
      ".s2-2",
      {
        x: "-100vw",
      },
      { x: 0, duration: 3, ease: "power4.out" }
    )
    .to(
      ".char2",
      {
        opacity: 1,
        duration: 3,
        stagger: 0.05,
        ease: "none",
      },
      "<0.5"
    )
    .to({}, { duration: 6 })

    .to(".s2-2", { x: "-100vw", duration: 6, ease: "power4.out", delay: 5 })
    .to(
      ".char2",
      {
        opacity: 0,
        duration: 3,
        stagger: 0.05,
        ease: "none",
      },
      "<0.5"
    )
    .to(".section-one", {
      backgroundColor: "#D3D9E0",
      duration: 3,
      ease: "power2.inOut",
      immediateRender: false,
    });

  const textElement3 = document.querySelector(".typing-text3");
  const text3 = "Langkah pertama ciptakan ruang yang tenang..";
  textElement3.innerHTML = text3
    .split("")
    .map((char) => `<span class="char3">${char}</span>`)
    .join("");
  gsap.set(".char3", { opacity: 0 });

  tl.to({}, { duration: 6 })

    .fromTo(
      ".s2-3",
      {
        x: "-100vw",
      },
      { x: 0, duration: 3, ease: "power4.out" }
    )
    .to(
      ".char3",
      {
        opacity: 1,
        duration: 3,
        stagger: 0.05,
        ease: "none",
      },
      "<0.5"
    )
    .to({}, { duration: 6 })

    .to(".s2-3", { x: "-100vw", duration: 6, ease: "power4.out", delay: 5 })
    .to(
      ".char3",
      {
        opacity: 0,
        duration: 3,
        stagger: 0.05,
        ease: "none",
      },
      "<0.5"
    );

  const textElement4 = document.querySelector(".typing-text4");
  const text4 = "Tenangkan pikiran. Tarik napas, hembuskan.";
  textElement4.innerHTML = text4
    .split("")
    .map((char) => `<span class="char4">${char}</span>`)
    .join("");
  gsap.set(".char4", { opacity: 0 });

  tl.to({}, { duration: 6 })

    .fromTo(
      ".s2-4",
      {
        x: "-100vw",
      },
      { x: 0, duration: 3, ease: "power4.out" }
    )
    .to(
      ".char4",
      {
        opacity: 1,
        duration: 3,
        stagger: 0.05,
        ease: "none",
      },
      "<0.5"
    )
    .to({}, { duration: 6 })

    .to(".s2-4", { x: "-100vw", duration: 6, ease: "power4.out", delay: 5 })
    .to(
      ".char4",
      {
        opacity: 0,
        duration: 3,
        stagger: 0.05,
        ease: "none",
      },
      "<0.5"
    );

  const textElement5 = document.querySelector(".typing-text5");
  const text5 = "Sedikit demi sedikit, fokusku meningkat.";
  textElement5.innerHTML = text5
    .split("")
    .map((char) => `<span class="char5">${char}</span>`)
    .join("");
  gsap.set(".char5", { opacity: 0 });

  tl.to({}, { duration: 6 })

    .fromTo(
      ".s2-5",
      {
        x: "-100vw",
      },
      { x: 0, duration: 3, ease: "power4.out" }
    )
    .to(
      ".char5",
      {
        opacity: 1,
        duration: 3,
        stagger: 0.05,
        ease: "none",
      },
      "<0.5"
    )
    .to({}, { duration: 6 })

    .to(".s2-5", { x: "-100vw", duration: 6, ease: "power4.out", delay: 5 })
    .to(
      ".char5",
      {
        opacity: 0,
        duration: 3,
        stagger: 0.05,
        ease: "none",
      },
      "<0.5"
    );

  const textElement6 = document.querySelector(".typing-text6");
  const text6 = "Dan kini, aku bisa lebih hadir untuk hal-hal yang benar-benar penting.";
  textElement6.innerHTML = text6
    .split("")
    .map((char) => `<span class="char6">${char}</span>`)
    .join("");
  gsap.set(".char6", { opacity: 0 });

  tl.to({}, { duration: 6 })

    .fromTo(
      ".s2-6",
      {
        x: "-100vw",
      },
      { x: 0, duration: 3, ease: "power4.out" }
    )
    .to(
      ".char6",
      {
        opacity: 1,
        duration: 3,
        stagger: 0.05,
        ease: "none",
      },
      "<0.5"
    )
    .to({}, { duration: 6 })

    .to(".s2-6", { x: "-100vw", duration: 6, ease: "power4.out", delay: 5 })
    .to(
      ".char6",
      {
        opacity: 0,
        duration: 3,
        stagger: 0.05,
        ease: "none",
      },
      "<0.5"
    )
    .to({}, { duration: 6 });
}

function gsapExit(tl) {}

//TODO: OTHER FUNCTION BELOW
