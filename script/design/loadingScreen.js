// VARIABLE FOR EXIT REPEAT ANIMATION
let shakeGSAP;

// VARIABLE FOR DOM
const splashView = document.querySelector(".splash");
const sectionOne = document.querySelector(".section-one");

export function loadingScreen(tl = gsap.timeline()) {
  return new Promise((resolve) => {
    sectionOne.style.display = "none";
    gsapEntry(tl);

    // Exit after 3 seconds
    setTimeout(() => {
      gsapExit(tl, resolve);
    }, 3000);
  });
}

function gsapEntry(tl) {
  gsap.fromTo(
    ".splashText",
    { opacity: 0, y: 20, ease: "power1.inOut" },
    { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" }
  );

  gsap.fromTo(
    ".splashIMG",
    { opacity: 0, y: 20, ease: "power1.inOut" },
    { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" }
  );

  shakeGSAP = tl.to(".splashText", {
    x: 5,
    y: 4,
    rotate: -15,
    duration: 0.5,
    delay: 0.5,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
    repeatDelay: 0.1,
    repeatRefresh: true,
  });
}

function gsapExit(tl, resolve) {
  if (shakeGSAP) shakeGSAP.kill();

  tl = gsap.timeline();
  tl.to([".splashText", ".splashIMG"], {
    y: "200vh",
    duration: 2,
    ease: "power1.out",
    onComplete: () => {
      sectionOne.style.display = "block";
      resolve(); // ✅ let main.js know loading is done
    },
  });
}
