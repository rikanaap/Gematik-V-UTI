export function loadingScreen() {
  gsapEntry();

  gsapExit();
}

const splashText = document.getElementById("splashText");

function gsapEntry() {
  gsap.from(splashText, {
    opacity: 0,
    y: -20,
    yoyo: true,
    ease: "power1.inOut",
  });
  gsap.to(splashText, {
    opacity: 1,
    y: 0,
    duration: 3,
    yoyo: true,
    ease: "power1.inOut",
  });

  fadeScreen();
}

function gsapExit() {}

//TODO: OTHER FUNCTION BELOW
function fadeScreen() {
  setTimeout(() => {
    const tl = gsap.timeline();

    tl.to(".loader", {
      opacity: 0,
      duration: 0.6,
      ease: "power1.out",
    })
      .set(".loader", { display: "none" }) // hide completely
      .to(".content", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
  }, 100); // fake loading time (2.5s)
}
