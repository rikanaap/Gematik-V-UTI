// VARIABLE FOR EXIT REPEAT ANIMATION
let shakeGSAP;

// VARIABLE FOR DOM
const section = document.querySelector(".splash");
const nextSection = document.querySelector(".section-one");


export function loadingScreen(tl = gsap.timeline()) {
  return new Promise((resolve) => {

    gsapEntry(tl);

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
    y: 4,
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
    y: '120vh',
    duration: 1,
    ease: "power1.out",
    onComplete: () => {
      resolve()
    }
  }).to(nextSection, { opacity: 1 }).to(section, { opacity: 0 })
}