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
      end: "+=10000",
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
    .to({}, { duration: 6 })
    .to({}, { duration: 6 })
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
    .to({}, { duration: 6 })
    .to(".s1-hand", {
      rotate: 0,
      y: 27,
      duration: 3,
      ease: "power2.out",
    })
    .to({}, { duration: 6 })
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
    .to({}, { duration: 6 })
    .to(".time", {
      opacity: 0,
      duration: 3,
      ease: "power2.inOut",
    })
    .to({}, { duration: 6 })
    .fromTo(
      ".bubText1",
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
    .fromTo(
      ".bubText2",
      {
        y: "200vh",
        ease: "power4.out",
      },
      {
        y: 0,
        duration: 3,
        ease: "power4.out",
      }
    )
    .to({}, { duration: 6 })
    .to([".bubText1", ".bubText2"], {
      y: "-200vh",
      duration: 3,
      ease: "power4.out",
    })
    .fromTo(
      ".bubbleText3",
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
    .fromTo(
      ".bubbleText4",
      {
        y: "200vh",
        ease: "power4.out",
      },
      {
        y: 0,
        duration: 3,
        ease: "power4.out",
      }
    )
    .to({}, { duration: 6 })
    .to([".bubbleText3", ".bubbleText4"], {
      y: "-200vh",
      duration: 3,
      ease: "power4.out",
    })
    .to({}, { duration: 6 })
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
        stagger: 0.5,
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
        stagger: 0.5,
        ease: "none",
      },
      "<0.5"
    )
    .to({}, { duration: 6 })
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
        stagger: 0.5,
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
        stagger: 0.5,
        ease: "none",
      },
      "<0.5"
    )
    .to({}, { duration: 6 })
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
        stagger: 0.5,
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
        stagger: 0.5,
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
    .to({}, { duration: 6 })
    .to(
      ".char4",
      {
        opacity: 1,
        duration: 3,
        stagger: 0.5,
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
        stagger: 0.5,
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
    .to({}, { duration: 6 })
    .to(
      ".char5",
      {
        opacity: 1,
        duration: 3,
        stagger: 0.5,
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
    .to({}, { duration: 6 })
    .to(
      ".char6",
      {
        opacity: 1,
        duration: 3,
        stagger: 0.5,
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
        stagger: 0.5,
        ease: "none",
      },
      "<0.5"
    )
    .to({}, { duration: 6 })
    .fromTo(
      ".s3-1",
      {
        x: "-150vw",
      },
      {
        x: 0,
        duration: 3,
        ease: "power4.out",
      }
    )
    .to({}, { duration: 6 })
    .to({}, { duration: 6 })
    .fromTo(
      ".bubbleText6",
      {
        y: "100vh",
      },
      {
        y: 0,
        duration: 3,
        ease: "power4.out",
      }
    )
    .to({}, { duration: 6 })
    .to({}, { duration: 6 })
    .fromTo(
      ".bubbleText7",
      {
        y: "100vh",
      },
      {
        y: 0,
        duration: 3,
        ease: "power4.out",
      }
    )
    .to(".bubbleText6", {
      y: "-100vh",
      duration: 3,
      ease: "power4.out",
    })
    .to({}, { duration: 6 })
    .to({}, { duration: 6 })
    .to(".bubbleText7", {
      y: "-100vh",
      duration: 3,
      ease: "power4.out",
    })
    .to({}, { duration: 6 })
    .to({}, { duration: 6 })
    .fromTo(
      ".s3-2",
      {
        x: "150vw",
        y: "-150vh",
      },
      {
        x: 0,
        y: 0,
        duration: 3,
        ease: "power4.out",
      }
    );

  const textElement7 = document.querySelector(".typing-text7");
  const text7 = "Kualitas tidur buruk karena penggunaan handphone";
  textElement7.innerHTML = text7
    .split("")
    .map((char) => `<span class="char7">${char}</span>`)
    .join("");
  gsap.set(".char7", { opacity: 0 });

  tl.to({}, { duration: 6 })
    .to({}, { duration: 6 })
    .to(
      ".char7",
      {
        opacity: 1,
        duration: 3,
        stagger: 0.5,
        ease: "none",
      },
      "<0.5"
    )
    .to({}, { duration: 6 })
    .to(
      ".char7",
      {
        opacity: 0,
        duration: 3,
        stagger: 0.5,
        ease: "none",
      },
      "<0.5"
    );

  const textElement8 = document.querySelector(".typing-text8");
  const text8 = "Bisa dihentikan dengan melepas handphone saat malam";
  textElement8.innerHTML = text8
    .split("")
    .map((char) => `<span class="char8">${char}</span>`)
    .join("");
  gsap.set(".char8", { opacity: 0 });

  tl.to({}, { duration: 6 })
    .fromTo(
      ".s3-3",
      {
        y: "-100vh",
      },
      {
        y: 0,
        duration: 3,
        ease: "power4.out",
      }
    )
    .to(
      ".s3-1",
      {
        x: "-100vw",
        duration: 3,
        ease: "power4.out",
      },
      "<"
    )
    .to(
      ".s3-2",
      {
        scale: 5,
        duration: 5,
        ease: "power4.out",
      },
      "<"
    )
    .to({}, { duration: 6 })
    .fromTo(
      ".s3-4",
      {
        x: "-150vw",
      },
      {
        x: 0,
        duration: 3,
        ease: "power4.out",
      }
    )
    .to({}, { duration: 6 })
    .to({}, { duration: 6 })
    .to(
      ".char8",
      {
        opacity: 1,
        duration: 3,
        stagger: 0.5,
        ease: "none",
      },
      "<0.5"
    )
    .to({}, { duration: 6 })
    .to(
      ".char8",
      {
        opacity: 0,
        duration: 3,
        stagger: 0.5,
        ease: "none",
      },
      "<0.5"
    )
    .to({}, { duration: 6 })
    .to({}, { duration: 6 })
    .to(".s3-4", {
      x: "-150vw",
      duration: 3,
      ease: "power4.out",
    })
    .to({}, { duration: 6 })
    .to({}, { duration: 6 })
    .to(".s3-2", {
      opacity: 0,
      duration: 3,
      ease: "power4.out",
    })
    .to(
      ".s3-3",
      {
        y: "-100vh",
        duration: 3,
        ease: "power4.out",
      },
      "<"
    );
    // ===== SCENE FOUR =====
    const s4_1 = document.querySelector(".s4-1");
    const s4_2 = document.querySelector(".s4-2");
    const s4_3 = document.querySelector(".s4-3");
    const s4_4 = document.querySelector(".s4-4");
    const s4_5 = document.querySelector(".s4-5");
    const s4_6 = document.querySelector(".s4-6");
    const s4_7 = document.querySelector(".s4-7");
    const s4_8 = document.querySelector(".s4-8");

    const textElement9 = document.querySelector(".typing-text9");
    const text9 = "Tidur berkualitas... mengembalikan energimu.";
    textElement9.innerHTML = text9
      .split("")
      .map((char) => `<span class="char9">${char}</span>`)
      .join("");
    gsap.set(".char9", { opacity: 0 });

    tl.to({}, { duration: 6 })
      .fromTo(
        ".s4-2",
        { x: "100vw", opacity: 0 },
        { x: 0, opacity: 1, duration: 5, ease: "power2.out" }
      )
      .fromTo(
        ".s4-1",
        { x: "-100vw" },
        { x: 0, duration: 5, ease: "power2.out" },
        "<"
      )
      .to(
        ".section-one",
        {
          backgroundColor: "#76B3C9",
          duration: 3,
          ease: "power2.inOut",
          immediateRender: false,
        },
        "<"
      )
      .to({}, { duration: 1.5 })
      .to(
        ".char9",
        { opacity: 1, duration: 14, stagger: { each: 0.15, from: "start" }, ease: "none" }
      )
      .to({}, { duration: 16 })
      .to(
        [".s4-1", ".s4-2"],
        { x: "-100vw", duration: 6, ease: "power2.inOut", delay: 5 }
      )
      .to(
        ".char9",
        { opacity: 0, duration: 8, stagger: 0.12, ease: "none" }
      );

    const textElement10 = document.querySelector(".typing-text10");
    const text10 = "Dulu, energi hanya cukup untuk...";
    textElement10.innerHTML = text10
      .split("")
      .map((char) => (char === "|" ? "<br/>" : `<span class="char10">${char}</span>`))
      .join("");
    gsap.set(".char10", { opacity: 0 });

    tl.to({}, { duration: 10 })
      .fromTo(
        ".s4-3",
        { x: "-100vw" },
        { x: 0, duration: 5, ease: "power2.out" }
      )
      .fromTo(
        ".s4-4",
        { x: "100vw" },
        { x: 0, duration: 5, ease: "power2.out" },
        "<"
      )
      .to({}, { duration: 1.5 })
      .to(
        ".char10",
        { opacity: 1, duration: 56, stagger: { each: 0.15, from: "start" }, ease: "none" }
      )
      .to({}, { duration: 16 })
      .to(
        [".s4-3", ".s4-4"],
        { x: "-100vw", duration: 6, ease: "power2.inOut", delay: 5 }
      )
      .to(
        ".char10",
        { opacity: 0, duration: 8, stagger: 0.12, ease: "none" }
      );

    const textElement11 = document.querySelector(".typing-text11");
    const text11 = "...scroll sendirian.";
    textElement11.innerHTML = text11
      .split("")
      .map((char) => `<span class="char11">${char}</span>`)
      .join("");
    gsap.set(".char11", { opacity: 0 });
    gsap.set(".typing-text11", { opacity: 0 });

    tl.to({}, { duration: 10 })
      .fromTo(
        ".s4-3",
        { x: "-100vw", scale: 1 },
        { x: 0, scale: 1, duration: 5, ease: "power2.out" }
      )
      .fromTo(
        ".s4-5",
        { x: "100vw", opacity: 0 },
        { x: 0, opacity: 1, duration: 5, ease: "power2.out" },
        "<"
      )
      .to({}, { duration: 0.5 })
      .to(
        ".s4-3",
        { scale: 1.09, duration: 12, ease: "power1.inOut", transformOrigin: "left center" }
      )
      .to(
        ".s4-3",
        { scale: 1.18, duration: 12, ease: "power1.inOut", transformOrigin: "left center" }
      )
      .to(
        ".s4-3",
        { scale: 1.25, duration: 12, ease: "power1.inOut", transformOrigin: "left center" }
      )
      .to(
        ".s4-5",
        { scale: 1, opacity: 1, duration: 16, ease: "power1.inOut" },
        "<-16"
      )

      .to(".typing-text11", { opacity: 1, duration: 1 })
      .to(
        ".char11",
        { opacity: 1, duration: 56, stagger: { each: 0.15, from: "start" }, ease: "none" }
      )
      .to({}, { duration: 16 })
      .to(
        [".s4-3", ".s4-5"],
        { x: "-100vw", duration: 6, ease: "power2.inOut" }
      )
      .to(
        ".char11",
        { opacity: 0, duration: 8, stagger: 0.12, ease: "none" }
      );

    const textElement12 = document.querySelector(".typing-text12");
    const text12 = "Tapi kini, kamu memilih untuk hadir.";
    textElement12.innerHTML = text12
      .split("")
      .map((char) => `<span class="char12">${char}</span>`)
      .join("");
    gsap.set(".char12", { opacity: 0 });
    gsap.set(".typing-text12", { opacity: 0 });

    tl.to({}, { duration: 10 })
      .fromTo(
        ".s4-6",
        { x: "-100vw", scale: 1 },
        { x: 0, scale: 1, duration: 5, ease: "power2.out" }
      )
      .fromTo(
        ".s4-7",
        { x: "100vw", scale: 0.8, opacity: 0.5 },
        { x: 0, scale: 1, opacity: 1, duration: 5, ease: "power2.out" },
        "<"
      )
      .to({}, { duration: 0.5 })
      .to(
        ".s4-6",
        { scale: 1.09, duration: 12, ease: "power1.inOut", transformOrigin: "left center" }
      )
      .to(
        ".s4-6",
        { scale: 1.18, duration: 12, ease: "power1.inOut", transformOrigin: "left center" }
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
      .to({}, { duration: 16 })
      .to(
        [".s4-6", ".s4-7"],
        { x: "-100vw", duration: 6, ease: "power2.inOut", delay: 5 }
      )
      .to(
        ".char12",
        { opacity: 0, duration: 8, stagger: 0.12, ease: "none" }
      );

    const textElement13 = document.querySelector(".typing-text13");
    const text13 = "Menemukan kembali momen berharga.";
    textElement13.innerHTML = text13
      .split("")
      .map((char) => (char === "|" ? "<br/>" : `<span class="char13">${char}</span>`))
      .join("");
    gsap.set(".char13", { opacity: 0 });

    tl.to({}, { duration: 10 })
      .fromTo(
        ".s4-8",
        { x: "-100vw", scale: 1 },
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
      .call(() => gsap.set(".scene-five-wrap", { opacity: 0, display: "block" }))
      .to(
        ".scene-four-wrap",
        {
          opacity: 0,
          duration: 2,
          ease: "power2.inOut"
        },
        "+=5"
      )
      .to(
        ".scene-five-wrap",
        {
          opacity: 1,
          duration: 0.5,
          onComplete: () => gsap.set(".scene-four-wrap", { display: "none" }),
          onReverseComplete: () => {
            gsap.set(".scene-four-wrap", { display: "block", opacity: 1 });
            gsap.set(".scene-five-wrap", { display: "none", opacity: 0 });
          }
        }
      );

    // ===== SCENE FIVE: Playing Ball Animation =====
    // Initial state: hide all scene five elements
    gsap.set([
      ".s5-cloud-1",
      ".s5-bushes-1",
      ".s5-ball-full",
      ".s5-char-1",
      ".s5-ball-dribble-1",
      ".s5-char-dribble-1",
      ".s5-ball-dribble-2",
      ".s5-char-dribble-2",
      ".s5-ball-dribble-3",
      ".s5-char-dribble-3",
      ".s5-ball-dribble-4",
      ".s5-char-dribble-4",
      ".s5-ball-dribble-5",
      ".s5-char-dribble-5",
      ".s5-ball-dribble-6",
      ".s5-char-dribble-6",
      ".s5-ball-final",
      ".s5-char-3",
      ".bubbleText-s5-1",
      ".bubbleText-s5-2"
    ], { opacity: 0 });

    // Slide 1: Cloud and Bushes enter (background scene setup)
    tl.to({}, { duration: 10 })
      .to(
        ".section-one",
        {
          backgroundColor: "#76B3C9",
          duration: 3,
          ease: "power2.inOut",
          immediateRender: false,
        }
      )
      .fromTo(
        ".s5-cloud-1",
        { x: "-200vw", opacity: 0 },
        { x: 0, opacity: 1, duration: 6, ease: "power2.out" }
      )
      .fromTo(
        ".s5-bushes-1",
        { y: "100vh", opacity: 0 },
        { y: 0, opacity: 1, duration: 5, ease: "power2.out" },
        "<"
      )
      .to({}, { duration: 8 });

    tl.fromTo(
      ".s5-ball-full",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 4, ease: "power2.out" }
    )
      .fromTo(
        ".s5-char-1",
        { x: 0, opacity: 0 },
        { x: "100px", opacity: 1, duration: 5, ease: "power2.out" },
        "<"
      )
      .to({}, { duration: 8 });

    tl.to([".s5-ball-full", ".s5-char-1"], { opacity: 0, duration: 1 })
      .to(
        [".s5-ball-dribble-1", ".s5-char-dribble-1"],
        { opacity: 1, duration: 1 },
        "<"
      )
      .to(
        ".s5-char-dribble-1",
        { left: "-5%", duration: 7, ease: "power2.inOut" }
      )
      .to(
        ".s5-ball-dribble-1",
        { left: "18%", duration: 7, ease: "power2.inOut" },
        "<"
      )
      .to(
        ".s5-ball-dribble-1",
        { rotation: 720, duration: 7, ease: "none", transformOrigin: "50% 50%" },
        "<"
      )
      .to({}, { duration: 4 });

    tl.to([".s5-ball-dribble-1", ".s5-char-dribble-1"], { opacity: 0, duration: 1 })
      .to(
        [".s5-ball-dribble-2", ".s5-char-dribble-2"],
        { opacity: 1, duration: 1 },
        "<"
      )
      .to(
        ".s5-char-dribble-2",
        { left: "2%", duration: 7, ease: "power2.inOut" }
      )
      .to(
        ".s5-ball-dribble-2",
        { left: "24%", duration: 7, ease: "power2.inOut" },
        "<"
      )
      .to(
        ".s5-ball-dribble-2",
        { rotation: 720, duration: 7, ease: "none", transformOrigin: "50% 50%" },
        "<"
      )
      .to({}, { duration: 4 });

    tl.to([".s5-ball-dribble-2", ".s5-char-dribble-2"], { opacity: 0, duration: 1 })
      .to(
        [".s5-ball-dribble-3", ".s5-char-dribble-3"],
        { opacity: 1, duration: 1 },
        "<"
      )
      .to(
        ".s5-char-dribble-3",
        { left: "9%", duration: 7, ease: "power2.inOut" }
      )
      .to(
        ".s5-ball-dribble-3",
        { left: "30%", duration: 7, ease: "power2.inOut" },
        "<"
      )
      .to(
        ".s5-ball-dribble-3",
        { rotation: 720, duration: 7, ease: "none", transformOrigin: "50% 50%" },
        "<"
      )
      .to({}, { duration: 4 });

    tl.to([".s5-ball-dribble-3", ".s5-char-dribble-3"], { opacity: 0, duration: 1 })
      .to(
        [".s5-ball-dribble-4", ".s5-char-dribble-4"],
        { opacity: 1, duration: 1 },
        "<"
      )
      .to(
        ".s5-char-dribble-4",
        { left: "16%", duration: 7, ease: "power2.inOut" }
      )
      .to(
        ".s5-ball-dribble-4",
        { left: "36%", duration: 7, ease: "power2.inOut" },
        "<"
      )
      .to(
        ".s5-ball-dribble-4",
        { rotation: 720, duration: 7, ease: "none", transformOrigin: "50% 50%" },
        "<"
      )
      .to({}, { duration: 4 });

    tl.to([".s5-ball-dribble-4", ".s5-char-dribble-4"], { opacity: 0, duration: 1 })
      .to(
        [".s5-ball-dribble-5", ".s5-char-dribble-5"],
        { opacity: 1, duration: 1 },
        "<"
      )
      .to(
        ".s5-char-dribble-5",
        { left: "23%", duration: 7, ease: "power2.inOut" }
      )
      .to(
        ".s5-ball-dribble-5",
        { left: "42%", duration: 7, ease: "power2.inOut" },
        "<"
      )
      .to(
        ".s5-ball-dribble-5",
        { rotation: 720, duration: 7, ease: "none", transformOrigin: "50% 50%" },
        "<"
      )
      .to({}, { duration: 4 });

    tl.to([".s5-ball-dribble-5", ".s5-char-dribble-5"], { opacity: 0, duration: 1 })
      .to(
        [".s5-ball-dribble-6", ".s5-char-dribble-6"],
        { opacity: 1, duration: 1 },
        "<"
      )
      .to(
        ".s5-char-dribble-6",
        { left: "30%", duration: 7, ease: "power2.inOut" }
      )
      .to(
        ".s5-ball-dribble-6",
        { left: "48%", duration: 7, ease: "power2.inOut" },
        "<"
      )
      .to(
        ".s5-ball-dribble-6",
        { rotation: 360, duration: 7, ease: "none", transformOrigin: "50% 50%" },
        "<"
      )
      .to({}, { duration: 5 });

    tl.to(
      ".section-one",
      {
        backgroundColor: "#20262D",
        duration: 5,
        ease: "power2.inOut",
        immediateRender: false,
      }
    )
      .to(
        ".s5-cloud-1",
        { x: "-200vw", opacity: 0, duration: 4, ease: "power2.inOut" },
        "<"
      )
      .to(
        ".s5-bushes-1",
        { y: "100vh", opacity: 0, duration: 4, ease: "power2.inOut" },
        "<"
      )
      .to([".s5-char-dribble-6", ".s5-ball-dribble-6"], { opacity: 0, duration: 1 })
      .to(
        [".s5-char-3", ".s5-ball-final"],
        { opacity: 1, duration: 1 },
        "<"
      )
      .to({}, { duration: 4 })
      .fromTo(
        ".bubbleText-s5-1",
        { y: "100vh", opacity: 0 },
        { y: 0, opacity: 1, duration: 6, ease: "power2.out" }
      )
      .to({}, { duration: 12 })
      .fromTo(
        ".bubbleText-s5-2",
        { y: "100vh", opacity: 0 },
        { y: 0, opacity: 1, duration: 6, ease: "power2.out" }
      )
      .to({}, { duration: 14 })
      .to(
        [".bubbleText-s5-1", ".bubbleText-s5-2"],
        { y: "-100vh", opacity: 0, duration: 5, ease: "power2.inOut", stagger: 0.5 }
      );
}

function gsapExit(tl) {}

//TODO: OTHER FUNCTION BELOW
