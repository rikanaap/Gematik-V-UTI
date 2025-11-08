gsap.registerPlugin(ScrollTrigger);

// loading
const display = document.querySelector(".scroller");

function loadingEntry() {
  gsap.fromTo(
    ".splashText",
    {
      opacity: 0,
      y: 20,
      yoyo: true,
      ease: "power1.inOut",
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      yoyo: true,
      ease: "power1.inOut",
    }
  );

  gsap.fromTo(
    ".splashIMG",
    {
      opacity: 0,
      y: 20,
      yoyo: true,
      ease: "power1.inOut",
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      yoyo: true,
      ease: "power1.inOut",
    }
  );

  display.style.display = "none";
}

function loadingExit() {
  gsap.to(".splash", {
    opacity: 0,
    duration: 0.6,
    ease: "power1.out",
  });

  display.style.display = "block";
}

function loadingScreen() {
  loadingEntry();

  //   gsapExit();

  setTimeout(() => {
    loadingExit();
  }, 3000);
}

loadingScreen();

const section = document.querySelector(".sectionOne");
const hand = section.querySelector("img[alt='hand']");
const notifs = section.querySelectorAll("img[alt='notif']");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sectionOne",
    start: "top center",
    end: "+=2000", // makin besar makin panjang area scroll
    scrub: true,
    pin: true,
  },
});

tl.from('.sectionOne img[alt="hand"]', {
  y: 200,
  opacity: 0,
  duration: 1,
});
notifs.forEach((notif, i) => {
  tl.from(
    notif,
    {
      opacity: 0,
      scale: 0.5,
      duration: 0.5,
    },
    ">"
  ); // muncul berurutan
});
